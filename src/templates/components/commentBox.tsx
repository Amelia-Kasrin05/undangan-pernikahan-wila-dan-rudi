/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useState } from "react";
import Edit from "../../assets/icons/edit";
import Trash from "../../assets/icons/trash";
import { updateData } from "../../services/firebase/services";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import useVisibility from "../../services/hooks/useVisibility";
import { ReplyType } from "../../services/firebase/services"; // Import ReplyType dari services.ts

export default function CommentBox({
  id,
  name,
  comment,
  date,
  admin = false,
  user = false,
  handleDeleteComment,
  getComments,
  replies = [],
  onReplySubmit,
  currentUserName,
}: {
  id: string;
  name: string;
  comment: string;
  date: any;
  user: boolean;
  admin: boolean;
  handleDeleteComment: Function;
  getComments: Function;
  replies?: ReplyType[];
  onReplySubmit: (commentId: string, replyName: string, replyText: string) => void;
  currentUserName: string;
}) {
  const animation = useVisibility();
  const [edit, setEdit] = useState(false);
  const [newComment, setNewComment] = useState(comment);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState("");

  const newDate = new Date(date.seconds * 1000 + date.nanoseconds / 1_000_000).toLocaleDateString("id-ID");

  const handleEdit = async (newComment: string) => {
    if (!newComment) {
      return toast.error("Komentar Tidak Boleh Kosong");
    }
    if (newComment.length === 0) {
      return toast.error("Komentar Tidak Boleh Kosong");
    }
    if (newComment === comment) {
      setEdit(false);
      return;
    }

    try {
      await updateData("comments", id, {
        comment: newComment,
        update_at: new Date(),
      });
      toast.success("Komentar berhasil diupdate!");
    } catch (error) {
      console.log(error);
      toast.error("Gagal update komentar.");
    } finally {
      setEdit(false);
      getComments();
    }
  };

  const handleSendReply = () => {
    if (!replyText.trim()) {
      return toast.error("Balasan tidak boleh kosong!");
    }
    onReplySubmit(id, currentUserName, replyText);
    setReplyText("");
    setShowReplyForm(false);
  };

  useEffect(() => {
    if (edit) {
      document.getElementById("newComment")?.focus();
    }
  }, [edit]);

  const convertTimestampToDate = (timestamp: { seconds: number; nanoseconds: number } | null | undefined) => {
    if (!timestamp) return new Date(0);
    const seconds = timestamp.seconds || 0;
    const nanoseconds = timestamp.nanoseconds || 0;
    return new Date(seconds * 1000 + nanoseconds / 1_000_000);
  };

  return (
    <motion.div ref={animation.ref} animate={animation.isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }} transition={{ duration: 0.7 }} className="border-b p-2">
      <div className="flex justify-between">
        <h1 className="font-medium text-sm">{name.split("_").join(" ")}</h1>
        <p className="text-xs text-gray-500">{newDate}</p>
      </div>
      <div className="flex justify-between gap-3">
        {edit ? (
          <input id="newComment" type="text" defaultValue={comment} onChange={(e) => setNewComment(e.target.value)} className="text-sm text-gray-500 font-[400] bg-gray-100 px-2 py-1 rounded-lg outline-none w-full" />
        ) : (
          <p className="text-sm text-gray-500 font-[400]">{comment}</p>
        )}
        <div className="flex gap-1">
          {user && !edit && (
            <div onClick={() => setEdit(true)} className="bg-orange-400 rounded-lg p-1 w-6 h-6 hover:cursor-pointer hover:bg-orange-400/80">
              <Edit />
            </div>
          )}
          {user && edit && (
            <div onClick={() => handleEdit(newComment)} className="bg-green-500 rounded-lg p-1 w-6 h-6 hover:cursor-pointer hover:bg-green-500/80">
              <img src="/icons/checked.png" alt="checked" className="w-full h-full" />
            </div>
          )}
          {admin && (
            <div onClick={() => handleDeleteComment(id)} className="bg-red-500 rounded-lg p-1 w-6 h-6 hover:cursor-pointer hover:bg-red-500/80">
              <Trash />
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 flex flex-col items-start">
        {!showReplyForm && (
          <button onClick={() => setShowReplyForm(true)} className="text-xs text-blue-500 hover:underline">
            Balas
          </button>
        )}

        {showReplyForm && (
          <div className="w-full flex flex-col gap-1 mt-2">
            <input
              type="text"
              placeholder={`Balas sebagai ${currentUserName.split("_").join(" ")}...`}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="border p-1 text-sm rounded-lg outline-none bg-gray-100 w-full"
            />
            <div className="flex gap-2 justify-end">
              <button onClick={handleSendReply} className="bg-blue-400 px-2 py-1 text-white rounded-full text-xs">
                Kirim Balasan
              </button>
              <button onClick={() => setShowReplyForm(false)} className="bg-gray-400 px-2 py-1 text-white rounded-full text-xs">
                Batal
              </button>
            </div>
          </div>
        )}

        {replies.length > 0 && (
          <div className="ml-4 mt-2 border-l pl-2 border-gray-200 w-full">
            {replies.map((reply) => (
              <div key={reply.id} className="text-sm my-1">
                <span className="font-medium text-gray-700">{reply.name.split("_").join(" ")}: </span>
                <span className="text-gray-600">{reply.reply_text}</span>
                <p className="text-xs text-gray-500">{convertTimestampToDate(reply.created_at).toLocaleDateString("id-ID")}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
