import { useParams } from "react-router-dom";
import { useState,useEffect,useContext } from "react";
import DocService from '../../DocService';
import './NewDoc.css';
import DocsContext from "../../contexts/DocsContext";
import { Input } from "@mui/material";

function NewDoc() {


    return (
        <div >
<Input />
        </div >
    )
}

export default NewDoc;