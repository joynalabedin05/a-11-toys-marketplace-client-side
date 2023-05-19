

const AllToy = ({ alltoy }) => {
    console.log(alltoy);
    const { _id, name, sub_category, available_quantity, price
    } = alltoy;

    return (
        <div className="">

            <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{name}</span>
            <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{sub_category}</span>
            <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{available_quantity
            }</span>
            <span className="mx-12 rounded bg-slate-700 text-white p-4 my-4">{price}</span>
            <button className="mx-12 rounded bg-slate-700 text-white p-4 my-4">button</button>



        </div>
    );
};

export default AllToy;