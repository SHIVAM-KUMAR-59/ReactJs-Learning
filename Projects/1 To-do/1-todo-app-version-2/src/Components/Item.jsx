let Item = (props) =>{
    return (
        <div className="container">
          <div className="row kg-row">
            <div className="col-6">{props.todoName}</div>
            <div className="col-4">{props.todoDate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger kg-button">
                Delete Task
              </button>
            </div>
          </div>
        </div>
      );
}

export default Item;