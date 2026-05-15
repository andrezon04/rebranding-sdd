import './Clients.css'

function Clients() {
    return (
        <section className="clients" aria-labelledby="clients-title">
            <div className="clients__top">
                <div>
                    <h2 id="clients-title">Conheça alguns dos nossos trabalhos</h2>
                </div>
            </div>

            <div className="clients__track">
                
                <article className="clients__card">
                    <h3>Brand refresh for local studio</h3>
                    <p className="clients__description">A sharper visual system with a stronger voice across web and social touchpoints.</p>
                    <span className="clients__tag">Strategy + design</span>
                </article>

                <article className="clients__card">
                    <h3>Landing page for a service business</h3>
                    <p className="clients__description">A focused page built to present value clearly and guide visitors toward action.</p>
                    <span className="clients__tag">UI + copy</span>
                </article>

                <article className="clients__card">
                    <h3>Portfolio relaunch for a creator</h3>
                    <p className="clients__description">A presentation layout that highlights selected work with more personality and clarity.</p>
                    <span className="clients__tag">Art direction</span>
                </article>

                <article className="clients__card">
                    <h3>Campaign kit for a product launch</h3>
                    <p className="clients__description">A cohesive set of assets that keeps the launch message consistent across channels.</p>
                    <span className="clients__tag">Content system</span>
                </article>
            </div>
        </section>
    )
}

export default Clients