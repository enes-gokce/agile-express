import React, { useState } from 'react'
import './modal.css'

export default function AddTimeSpentModal({ handleAddTimeSpent, setShowAddTimeSpentModal }) {

    const [time, setTime] = useState({ duration: "" });

    const submitHandler = e => {
        e.preventDefault();
        handleAddTimeSpent(time);
    }

    return (
        <div className="modal-background">
            <div className="modal-container-2">
                <div className="titleCloseBtn"><button onClick={() => setShowAddTimeSpentModal(false)}>X</button></div>
                <div className="body">
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="mb-1 col-lg-11">
                                <label>Time Spent</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter time spent"
                                    onChange={e => setTime({ duration: e.target.value })}
                                    value={time.duration}
                                />
                            </div>
                        </div>
                        <div className="mb-1 d-grid col-lg-11">
                            <button type="submit" className="btn btn-primary btn-md mb-1">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}