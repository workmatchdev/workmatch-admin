import Layout from "@/components/Layout";
import Title from "@/components/Title";
import Modal from "@/components/Modal";

const Supports = () => {
    return (
        <Layout>
            <Title title="Soporte" />
            <div className="mt-10">
                <div>
                    <div className="flex flex-row justify-between items-center py-2 px-2 bg-slate-100">
                        <p>Cosme Fulanito</p>
                        <p>cosmeFulnatio@gmail.com</p>
                        <p>11/09/2023</p>
                        <p className="p-2 bg-orange-400 rounded-md text-white">No leido</p>
                        <Modal title='Ver mensaje'>
                            <div className="p-4">
                                <p className="py-2 font-semibold"><span>Nombre:</span> Cosme Fulanito</p>
                                <p className="py-2 font-semibold"><span>Email:</span> cosmeFulnatio@gmail.com</p>
                                <p className="py-2 font-semibold"><span>Fecha: </span> 11/09/2023</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo vitae odio iaculis eleifend ac vel libero. Integer placerat eros vestibulum lorem faucibus finibus. Ut sed nisl nec massa cursus cursus. Praesent vel accumsan enim. Vivamus accumsan velit at nunc sodales, non lobortis tellus lacinia. Phasellus ex nunc, eleifend id mattis quis, ultrices eget elit. Sed et dignissim nisi, vitae accumsan ante. Donec vestibulum aliquam odio, sed dignissim dolor iaculis vel. Nam purus mi, aliquet sit amet urna id, convallis pulvinar tortor.
                                </p>
                                <div class="w-full h-96">
                                    <img class="object-contain h-full w-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-2 bg-slate-100">
                        <p>Cosme Fulanito</p>
                        <p>cosmeFulnatio@gmail.com</p>
                        <p>11/09/2023</p>
                        <p className="p-2 bg-orange-400 rounded-md text-white">No leido</p>
                        <Modal title='Ver mensaje'>
                            <div className="p-4">
                                <p className="py-2 font-semibold"><span>Nombre:</span> Cosme Fulanito</p>
                                <p className="py-2 font-semibold"><span>Email:</span> cosmeFulnatio@gmail.com</p>
                                <p className="py-2 font-semibold"><span>Fecha: </span> 11/09/2023</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo vitae odio iaculis eleifend ac vel libero. Integer placerat eros vestibulum lorem faucibus finibus. Ut sed nisl nec massa cursus cursus. Praesent vel accumsan enim. Vivamus accumsan velit at nunc sodales, non lobortis tellus lacinia. Phasellus ex nunc, eleifend id mattis quis, ultrices eget elit. Sed et dignissim nisi, vitae accumsan ante. Donec vestibulum aliquam odio, sed dignissim dolor iaculis vel. Nam purus mi, aliquet sit amet urna id, convallis pulvinar tortor.
                                </p>
                                <div class="w-full h-96">
                                    <img class="object-contain h-full w-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div className="flex flex-row justify-between items-center py-2 px-2 bg-slate-100">
                        <p>Cosme Fulanito</p>
                        <p>cosmeFulnatio@gmail.com</p>
                        <p>11/09/2023</p>
                        <p className="p-2 bg-orange-400 rounded-md text-white">No leido</p>
                        <Modal title='Ver mensaje'>
                            <div className="p-4">
                                <p className="py-2 font-semibold"><span>Nombre:</span> Cosme Fulanito</p>
                                <p className="py-2 font-semibold"><span>Email:</span> cosmeFulnatio@gmail.com</p>
                                <p className="py-2 font-semibold"><span>Fecha: </span> 11/09/2023</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo vitae odio iaculis eleifend ac vel libero. Integer placerat eros vestibulum lorem faucibus finibus. Ut sed nisl nec massa cursus cursus. Praesent vel accumsan enim. Vivamus accumsan velit at nunc sodales, non lobortis tellus lacinia. Phasellus ex nunc, eleifend id mattis quis, ultrices eget elit. Sed et dignissim nisi, vitae accumsan ante. Donec vestibulum aliquam odio, sed dignissim dolor iaculis vel. Nam purus mi, aliquet sit amet urna id, convallis pulvinar tortor.
                                </p>
                                <div class="w-full h-96">
                                    <img class="object-contain h-full w-full mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" />
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Supports;