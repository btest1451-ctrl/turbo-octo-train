 "use client";
import {useState} from "react";
import {Check,Copy} from "lucide-react";
export function CopyCommand({command}:{command:string}){const[copied,setCopied]=useState(false);async function copy(){await navigator.clipboard.writeText(command);setCopied(true);setTimeout(()=>setCopied(false),1400)}return <div className="commandBox"><code>{command}</code><button onClick={copy} aria-label="Copiar comando">{copied?<Check size={16}/>:<Copy size={16}/>}</button></div>}