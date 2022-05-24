import React from 'react';

const ConfirmModal = ({setIsConfirmDelete}) => {
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag  */}
            <input type="checkbox" id="confirm-modal" class="modal-toggle" />
            <label for="confirm-modal" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <div class="card ">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title mb-5">Are you sure?</h2>
                            <div class="card-actions justify-end">
                                {/* <button class="btn btn-outline btn-primary">Accept</button> */}
                                <label  onClick={()=>setIsConfirmDelete(true)} for="confirm-modal" class="btn btn-outline btn-primary">Accept</label>
                                <label for="confirm-modal" class="btn btn-outline">Cancel</label>

                            </div>
                        </div>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default ConfirmModal;