import React from 'react';

const ConfirmModal = ({setIsConfirmDelete}) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag  */}
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <label for="confirm-modal" className="modal cursor-pointer">
                <label className="modal-box relative" for="">
                    <div className="card ">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-5">Are you sure?</h2>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-outline btn-primary">Accept</button> */}
                                <label  onClick={()=>setIsConfirmDelete(true)} for="confirm-modal" className="btn btn-outline btn-primary">Accept</label>
                                <label for="confirm-modal" className="btn btn-outline">Cancel</label>

                            </div>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default ConfirmModal;