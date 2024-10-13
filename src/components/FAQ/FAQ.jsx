import React from "react";
const faqData = [
    {
        question: "What is Fanta",
        answer: "Fanta is a popular fruit-flavored carboneted soft drink created by The Coka Cola company.",
    },
    {
        question: "What flavors  does Fanta offer?",
        answer: "Fanta offers a variety of flavors including orange, grape, pineapple, and  more!",
    },
    {
        question: "Is Fanta gluten free?",
        answer: "Yes, Fanta is gluten-free making it suitable for those with gluten intoleance.",
    },
    {
        question: "How many calories are in a can of Fanta",
        answer: "A 12 oz can of Fanta Orange contains about 160 calories.",
    },
]

const FAQ = () => {
    const [active, setActive] = React.useState(null);
    const handleClick = (index) => {
        setActive(index === active ? null : index);
    }
    return (
        <div className="max-w-2xl mx-auto mt-20 mb-28 py-4">
            <h1 className="text-3xl font-bold text-center pb-8">Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <div className="mb-4 py-4 px-2 border-b border-gray-300 shadow-lg rounded-md bg-white hover:translate-y-2 duration-300" key={index}>
                    <div className="flex justify-between items-center cursor-pointer py-4" onClick={() => handleClick(index)}>
                        <h3 className="text-xl font-semibold text-gray-800">{item.question}</h3>
                        <span>{active === index ? "-" : "+"}</span>
                    </div>
                    {active === index && <p className="text-gray-600">{item.answer}</p>}
                </div>
            ))}
        </div>
    )
}

export default FAQ;