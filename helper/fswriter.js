const fs = require("fs");

fs.readFile("", "utf-8", (err, data) => {
	if (err) {
		console.error(err);
	} else {
		const  = JSON.parse(data);
		.push(newReview);
		fs.writeFile(``, reviewString, (err) =>
			err
				? console.error(err)
				: console.log(
						`Review for ${newReview.product} has been written to JSON file`
				  )
		);
	}
});
