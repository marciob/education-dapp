import { Web3Storage } from "web3.storage";

function getAccessToken() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDIwQTNGOWQ2ZEM4MDkwQzI4RTMyMmNGOGZEN2RiYUFFMTVmNTljMDkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4Mjk5Njg0ODQsIm5hbWUiOiJoZWxsby13b3JsZCJ9.XtY6YOmTwhVaINY8mDNVJB6NELHPymC95-EM762u4ts";
}

function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}

async function retrieve(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid}`);
  }

  // request succeeded! do something with the response object here...
}

async function retrieveFiles(cid) {
  const client = makeStorageClient();
  const res = await client.get(cid);
  console.log(`Got a response! [${res.status}] ${res.statusText}`);
  if (!res.ok) {
    throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`);
  }

  // unpack File objects from the response
  const files = await res.files();
  console.log("files: ", files);
  for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`);
  }
}

//retrieve("bafybeibbgdidm665lrududgk7islhru3f5zxactbqi6azdtmuxezsldxgq");

retrieveFiles("bafybeibbgdidm665lrududgk7islhru3f5zxactbqi6azdtmuxezsldxgq");
