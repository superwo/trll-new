const OrganizationIdPage = () => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    placeholder="Enter a board title"
                    className="border-black border p-1"
                />
            </form>
        </div>
    );
};

export default OrganizationIdPage;
