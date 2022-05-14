export const transformFileIntoBlob = async(file: File): Promise<Blob|string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const data = reader.result;
            const blob = new Blob([data], { type: file.type });
            resolve(blob);
        }
        reader.readAsArrayBuffer(file);
    })
}