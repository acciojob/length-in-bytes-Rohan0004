const byteSize = (str) => {
  // write your code here
	let textBlob = new Blob([str], { type: "text/plain" });
	return textBlob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
