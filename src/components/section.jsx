import React, { useState } from 'react';

const Section = () => {
    // HOOKS
    let data = {
        facebook: ['Hack', 'PHP (HHVM)', 'React', 'Pytorch', 'C++', 'Python'],
        twitter: ['C++', 'Java', 'Scala', 'Ruby'],
        amazon: ['Javascript', 'C++', 'Java', 'Perl', 'Python'],
        apple: ['AppleCloud', 'Swift', 'React-native', 'TensorFlow', 'Python']
    }
    const [companyName, setcompanyName] = useState('Facebook')
    const [techlist, settechlist] = useState(data.facebook)

    // CALLBACK FUNCTIONS
    const facebook = (e) => {
        setcompanyName(e.target.textContent)

    }
    const twitter = (e) => {
        setcompanyName(e.target.textContent)
        settechlist(data.twitter)
    }
    const amazon = (e) => {
        setcompanyName(e.target.textContent)
        settechlist(data.amazon)
    }
    const apple = (e) => {
        setcompanyName(e.target.textContent)
        settechlist(data.apple)
    }


    return (
        <div>
            <div className="container-fluid my-section">
                <h1>Welcome To React State Hook App</h1>
                <p>In this app you can see the most popular programming languages And
                    libraries used by the world’s largest tech companies .</p>
            </div>


            <div className="container mt-5">
                <h3>Select Company</h3>
                <div className="row">
                    <div className="col-md-4">
                        <p className="alert alert-info">Click on buttons to change the state.</p>
                        <div className="my-3"><button onClick={facebook} className="btn btn-dark">Facebook</button></div>
                        <div className="my-3"><button onClick={twitter} className="btn btn-dark">Twitter</button></div>
                        <div className="my-3"><button onClick={amazon} className="btn btn-dark">Amazon</button></div>
                        <div className="my-3"><button onClick={apple} className="btn btn-dark">Apple</button></div>

                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <h3 className="card-header bg-dark text-white" >{companyName} Used</h3>
                            <div className="card-body">
                                <ul>
                                    {techlist.map((value, index) => {
                                        return <li key={index} className="ml-3">{value}</li>
                                    })}

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>);
}

export default Section;