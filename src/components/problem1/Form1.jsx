export default function Form1({ formData, handleChange, handleSubmit }) {
  return (
    <div className="col-6 ">
      <form
        onSubmit={handleSubmit}
        className="row gy-2 gx-3 align-items-center mb-4"
      >
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Status"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
