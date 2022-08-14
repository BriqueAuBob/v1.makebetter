const transformFileIntoBlob = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      const blob = new Blob([data], { type: file.type });
      resolve(blob);
    };
    reader.readAsArrayBuffer(file);
  });
};
const transformFileIntoBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
};
const style = "";
export {
  transformFileIntoBlob as a,
  transformFileIntoBase64 as t
};
