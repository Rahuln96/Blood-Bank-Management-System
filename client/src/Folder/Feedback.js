import React from 'react';
import { Link } from 'react-router-dom';

export default function Feedback() {
  return (
    <div>
      
  <div id="feedback-form-wrapper">
    <div id="floating-icon">
      <button type="button" className="btn btn-danger btn-sm rounded-0" data-toggle="modal" data-target="#feedback-form-modal">
        <Link to="/src/Folder/FbForm.js" className='text-decoration-none text-light'>Feedback</Link>
      </button>
  
    </div>
    <div id="feedback-form-modal">
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Feedback Form</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">How likely you would like to recommand us to your friends?</label>
                  <div className="rating-input-wrapper d-flex justify-content-between mt-2">
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">1</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">2</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">3</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">4</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">5</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">6</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">7</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">8</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">9</span></label>
                    <label><input type="radio" name="rating" /><span className="border rounded px-3 py-2">10</span></label>
                  </div>
                  <div className="rating-labels d-flex justify-content-between mt-1">
                    <label>Very unlikely</label>
                    <label>Very likely</label>
                  </div>
                </div>
                <div className="form-group">
                  <label for="input-one">What made you leave us so early?</label>
                  <input type="text" className="form-control" id="input-one" placeholder="" />
                </div>
                <div className="form-group">
                  <label for="input-two">Would you like to say something?</label>
                  <textarea className="form-control" id="input-two" rows="3"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" type='text/jsx' integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" type='text/jsx' integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    </div>
  )
}
