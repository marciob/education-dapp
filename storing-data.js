import { Web3Storage, File } from "web3.storage";
import { Blob } from "@web-std/blob";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIwQTNGOWQ2ZEM4MDkwQzI4RTMyMmNGOGZEN2RiYUFFMTVmNTljMDkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4Mjk5Njg0ODQsIm5hbWUiOiJoZWxsby13b3JsZCJ9.XtY6YOmTwhVaINY8mDNVJB6NELHPymC95-EM762u4ts";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

async function getFiles(path) {
  const files = await getFilesFromPath(path);
  console.log(`read ${files.length} file(s) from ${path}`);
  return files;
}

export function makeFileObjects(str) {
  const blob = new Blob([str]);

  const files = [
    new File(["contents-of-file-1"], "plain-utf8.txt"),
    new File([blob], "text.json"),
  ];

  return files;
}

export async function storeFiles(files) {
  const client = makeStorageClient();
  const cid = await client.put(files);
  console.log("stored files with cid:", cid);
  return cid;
}

export async function passMyData(str) {
  const myData = await makeFileObjects(str);
  const storeThere = storeFiles(myData);

  console.log(storeThere);

  return storeThere;
}