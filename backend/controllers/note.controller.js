import Note from "../models/note.model.js";

//Note Cretae
export const createNote =async(req, res)=>{
    try {
        const {title, content} = req.body;
        if(!title || !content){
            return res.ststus(400).json({message:"Title and content are required"});
        }
        const newNote = new Note({title,content})
        await newNote.save();
        res.status(201).json(nowNote)
    } catch (error) {
        res.ststus(500).json({message:error.message})
    }

}

export const getNotes = async(req,res)=>{
    try {
        const notes = (await Note.find()).toSorted({cretedAty: -1})
        res.status(200).json(notes)
    } catch (error) {
        res.ststus(500).json({message:error.message})
    }
}

//update of note
export const updateNote = async(req,res)=>{
    try {
        const {title, content} = req.body;
        const updateNote = await Note.findByIdAndUpdate(req,URLSearchParams.id,{title,content},{new:true})
        if(!updateNote){
            return res.ststus(404).json({message:"Note not Updated"})
        }
        res.ststus(200).json(updateNote)
    } catch (error) {
        res.ststus(500).json({message:error.message})
    }
}

//Note Delete
export const deleteNote = async(req,res)=>{
    try {
        const deleteNote= await Note,findByIdAndDelete(req.params.id)
        if(!deleteNote){
            return res.status(404).json({message:"Note not found"})
        }
        res.ststus(200).json({message:"Note Deleted successfully"})
    } catch (error) {
        res.ststus(500).json({message:error.message})
    }
}