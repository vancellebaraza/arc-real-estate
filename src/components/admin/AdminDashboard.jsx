import { useCallback, useEffect, useState } from "react";
import { Trash2, LogOut } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../context/AuthContext";
import PropertyForm from "./PropertyForm";

export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const loadProperties = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("properties")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setRows(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  async function handleDelete(id) {
    if (!window.confirm("Delete this property? This cannot be undone.")) return;

    setDeletingId(id);
    const { error } = await supabase.from("properties").delete().eq("id", id);
    setDeletingId(null);

    if (!error) {
      setRows((list) => list.filter((r) => r.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Property Admin
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Signed in as {user?.email}
            </p>
          </div>

          <button
            onClick={signOut}
            className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        <PropertyForm onCreated={loadProperties} />

        <div className="mt-10">
          <h2 className="mb-4 text-xl font-semibold text-slate-900">
            Properties Added Here ({rows.length})
          </h2>

          {loading ? (
            <p className="text-slate-500">Loading…</p>
          ) : rows.length === 0 ? (
            <p className="text-slate-500">
              No properties added through this dashboard yet. The listings
              already on the site were added directly in code and aren't
              managed here.
            </p>
          ) : (
            <div className="space-y-3">
              {rows.map((row) => (
                <div
                  key={row.id}
                  className="flex items-center justify-between rounded-xl bg-white p-4 shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={row.cover_image_url}
                      alt={row.title}
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium text-slate-900">{row.title}</p>
                      <p className="text-sm text-slate-500">{row.location}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(row.id)}
                    disabled={deletingId === row.id}
                    className="text-slate-400 hover:text-red-600 disabled:opacity-50"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
