import React from 'react'
import Table from '../components/Sponser/Table'

const Sponser = () => {
    return (
        <>
            <section id="Sponser">
                <div className="container mx-auto my-2">

                    {/* Here we include the name of the sponser  */}
                    <h2 className="text-xl font-bold">Welcome <span className="text-red-300 text-2xl">Sponser</span></h2>

                    <hr />


                    {/* Section of the tables to showing all the stuffs of sponser  */}
                    <Table heading={"Can Make Changes"} para={"You can make changes or always try to enhance the places what you providing our clients, Keep Pi Tup!"} />
                </div>
            </section>
        </>
    )
}

export default Sponser