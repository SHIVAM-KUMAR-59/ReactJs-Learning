let Item = (props) =>{
    return (
        <div class="container">
          <div class="row kg-row">
            <div class="col-6">{props.todoName}</div>
            <div class="col-4">{props.todoDate}</div>
            <div class="col-2">
              <button type="button" class="btn btn-danger kg-button">
                Delete Task
              </button>
            </div>
          </div>
        </div>
      );
}

export default Item;