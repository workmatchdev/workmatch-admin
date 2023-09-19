import { useState, Children, isValidElement, cloneElement } from "react";

const Modal = (props) => {

    const { children, title, buttonStyle } = props;
    const [showModal, setShowModal] = useState(false);

    const childrenWithProps = Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, { setShowModal });
        }
        return child;
      });

    return (
        <div>
            <div className="">
                <button
                    className={buttonStyle}
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                   {title}
                </button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-screen"
                    >
                        <div className="relative my-6 mx-auto sm:w-1/2 w-11/12">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                {childrenWithProps}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
}

export default Modal;