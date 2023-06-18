export default function CreatePost() {
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					fetch("/api/posts", {
						body: JSON.stringify(Object.fromEntries(new FormData(e.target).entries())),
						method: "POST",
						headers: {
							"content-type": "application/json",
						},
					});
				}}
			>
				<input type="text" id="title" name="title" />
				<br />
				<textarea id="body" name="body"></textarea>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
