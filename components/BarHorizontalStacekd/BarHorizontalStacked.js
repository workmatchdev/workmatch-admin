import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    {
        name: "Normal mensual",
        Renovaciones: 4000,
        Canceladas: 2400,
        "Sin membrecia": 2400
    },
    {
        name: "Normal Semestral",
        Renovaciones: 3000,
        Canceladas: 1398,
        "Sin membrecia": 2210
    },
    {
        name: "Page C",
        Renovaciones: 2000,
        Canceladas: 8,
        "Sin membrecia": 2290
    },
    {
        name: "Page D",
        Renovaciones: 2780,
        Canceladas: 3908,
        "Sin membrecia": 2000
    },
    {
        name: "Page E",
        Renovaciones: 18,
        Canceladas: 4800,
        "Sin membrecia": 2181
    },
    {
        name: "Page F",
        Renovaciones: 2390,
        Canceladas: 3800,
        "Sin membrecia": 2500
    },
    {
        name: "Page G",
        Renovaciones: 3490,
        Canceladas: 4300,
        "Sin membrecia": 2100
    }
];

export const BarHorizontalStacked = () => {
    return (
        <div className="bg-gray-200 mt-10  p-4 mb-4">
            <h2 className="py-5 text-xl font-bold text-center">Planes activos</h2>
            <div className="flex flex-row justify-end pr-8 pb-3">
                <div className="flex flex-col items-start">
                    <label className="font-bold m-3">Mes seleccionado</label>
                    <select className="w-full text-center rounded-sm p-2">
                        <option>-- Selecciones</option>
                        <option value="1">Enero</option>
                        <option value="2">Febrero</option>
                        <option value="3">Marzo</option>
                        <option value="4">Abril</option>
                        <option value="5">Mayo</option>
                        <option value="6">Junio</option>
                        <option value="7">Julio</option>
                        <option value="8">Agosto</option>
                        <option value="9">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto flex justify-center">
                <BarChart
                    width={1250}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Canceladas" fill="#D50303" minPointSize={5} />
                    <Bar dataKey="Renovaciones" fill="#32B614" minPointSize={10} />
                    <Bar dataKey="Sin membrecia" fill="#3C0491" minPointSize={10} />
                </BarChart>
            </div>
        </div>
    );
}

export default BarHorizontalStacked;