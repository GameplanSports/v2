import "../Global.css";

export default function Footer() {
    return (
        <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top">
            <div class="col mb-3">
                <h5 className="gameplanBrandName">Gameplan Sports</h5>
                <p class="text-body-secondary">© 2024</p>
            </div>
            
            <div></div>
            <div></div>

            <div class="col mb-3">
                <h5>Legal</h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Terms</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Cookie policy</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Privacy policy</a></li>
                </ul>
            </div>
        
            <div class="col mb-3">
                <h5>Contact</h5>
                <ul class="nav flex-column">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">info@GameplanSports.ca</a></li>
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">613-555-5555</a></li>
                <li class="nav-item mb-2"><a href="https://maps.app.goo.gl/AdfwgPLmcADU3d3g6" target="_blank" class="nav-link p-0 text-body-secondary">2165 Carling Ave.</a></li>
                </ul>
            </div>
        </footer>
      </div>
    )
}