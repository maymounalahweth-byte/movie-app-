import React, { useState } from "react";

const emptyMovie = { title: "", description: "", posterURL: "", rating: 3 };

const AddMovie = ({ onAdd }) => {
  const [form, setForm] = useState(emptyMovie);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    onAdd({ ...form, rating: Number(form.rating) });
    setForm(emptyMovie);
  };

  return (
    <form className="add-movie" onSubmit={handleSubmit}>
      <h2>Ajouter un film</h2>
      <input name="title" placeholder="Titre" value={form.title} onChange={handleChange} required />
      <input name="posterURL" placeholder="URL de l'affiche" value={form.posterURL} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <label>
        Note
        <input name="rating" type="number" min="0" max="5" step="0.1" value={form.rating} onChange={handleChange} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovie;