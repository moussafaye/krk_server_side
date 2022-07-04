import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  fname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  matiere: { type: String, required: true },
  domaine: { type: String, required: true },
  honoraire: { type: Number, required: true },
  niveau: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model('User', userSchema);
