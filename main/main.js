module.exports = function main(email, suffixes) {
  // Write your code here
  var str = email.split("@");
  for (var i = 0; i< suffixes.length; i++)
	  if (str[1] == suffixes[i])
		return true;
	   else 
		return false;
};
