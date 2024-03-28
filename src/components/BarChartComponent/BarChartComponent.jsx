import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const BarChartComponent = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('reads'));
        setBooks(getData);
    }, []);

    const nameAndPageArray = books?.map(({ book_name, total_page }) => ({ book_name, total_page }));

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='w-full h-96 md:w-full md:h-[600px]'>
            <ResponsiveContainer>
                <BarChart
                    width={600}
                    height={300}
                    data={nameAndPageArray}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="book_name" />
                    <Tooltip />
                    <Legend />
                    <YAxis />
                    <Bar dataKey="total_page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {nameAndPageArray?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;