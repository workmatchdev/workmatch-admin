import React from "react";
import Layout from "@/components/Layout";
import BarHorizontalStacekd from "@/components/BarHorizontalStacekd";
import JointLineScatterChart from "@/components/JointLineScatterChart";
import Title from "@/components/Title";
import useSession from "@/hooks/sessions/useSession";

const Metrics = () => {
    const { user } = useSession();
    return (
        <Layout>
            <Title title='Metricas' />
            <div className="flex sm:flex-row justify-between flex-col p-4 bg-gray-200 m-4 my-8">
                <div className="sm:w-1/4 w-full border flex justify-center items-center flex-col h-48 bg-white">
                    <p className="text-2xl text-sky-800">Usuarios</p>
                    <p className="text-2xl text-sky-600">55</p>
                </div>
                <div className="sm:w-1/4 w-full border flex justify-center items-center flex-col h-48 bg-white">
                    <p className="text-2xl text-sky-800">Empresas</p>
                    <p className="text-2xl text-sky-600">12</p>
                </div>
                <div className="sm:w-1/4 w-full border flex justify-center items-center flex-col h-48 bg-white">
                    <p className="text-2xl text-sky-800">Matchs/week</p>
                    <p className="text-2xl text-sky-600">15</p>
                </div>
                <div className="sm:w-1/4 w-full border flex justify-center items-center flex-col h-48 bg-white">
                    <p className="text-2xl text-sky-800">Planes activos</p>
                    <p className="text-2xl text-sky-600">35</p>
                </div>
            </div>
            <div className="p-4">
                <BarHorizontalStacekd />
                <JointLineScatterChart />
            </div>
        </Layout>
    );
}

export default Metrics;