import { WarningModalProps } from "../Utils/interface"


const ConfirmationPopUp = (props: WarningModalProps) => {
    const { handleClose, header, body, primaryBtnName } = props
    return (
        <div className="confirmationModel">
            <div className="header">{header}</div>
            <div>{body}</div>
            <div>
                <button onClick={() => handleClose(true)}>{primaryBtnName}</button>
                <button onClick={() => handleClose(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default ConfirmationPopUp