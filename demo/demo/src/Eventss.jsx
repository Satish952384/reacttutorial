import "./eventss.css";
const Events = () => {

    let count = 0;

    const handleInc = () => {
        count++;
        console.log(count);
    };

    const handleDec = () => {
        count--;
        console.log(count);
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            Events components

            <div onClick={handleInc}>+</div>

            {count}

            <input
                onChange={handleChange}
                className="input"
            />

            <div onClick={handleDec}>-</div>
        </div>
    );
};

export default Events;