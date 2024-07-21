import NavbarLoggedIn from '../components/Navbar_logged_in';
import Footer from '../components/GameplanFooter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Dashboard() {
    return (
        <div className='px-5' style={{ minHeight: "100vh" }}>
            <NavbarLoggedIn />
            <h1 className='sectionTitle'>Upcoming games and events:</h1>
            <div className="container">
                <Table bordered striped classname='statsTable' style={{border:'black'}}>
                    <thead>
                        <tr>
                        <th className='tableHeadItem'>Playing</th>
                        <th className='tableHeadItem'>Location</th>
                        <th className='tableHeadItem'>Time</th>
                        <th className='tableHeadItem'>Previous score</th>
                        <th className='tableHeadItem'>Additional info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>You (Ottawa Senators) @ Edmonton Oilers</td>
                            <td><a href='https://maps.app.goo.gl/qeP5ivGTjhhVRuQH6' target='_blank' className='evenetLocationLink'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</a></td>
                            <td>Today, July 23th, 7:00pm</td>
                            <td>3-4 (L)</td>
                            <td>There's a bar accross the street if we want to stop by afterwards...</td>
                        </tr>
                        <tr>
                            <td>You (Ottawa Senators) vs Toronto Maple leafs</td>
                            <td><a href='https://maps.app.goo.gl/ZiQSXe3o68s83xLJ8' target='_blank' className='evenetLocationLink'>Barbara Ann Scott Arena, 2250 Torquay Ave, Ottawa, ON</a></td>
                            <td>Friday, July 26th, 8:30pm</td>
                            <td>6-0 (W)</td>
                            <td>This team is not great, should be easy.</td>
                        </tr>
                        <tr>
                            <td>You (Ottawa Senators) @ Edmonton Oilers</td>
                            <td><a href='https://maps.app.goo.gl/qeP5ivGTjhhVRuQH6' target='_blank' className='evenetLocationLink'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</a></td>
                            <td>Today, July 23th, 7:00pm</td>
                            <td>3-4 (L)</td>
                            <td>There's a bar accross the street if we want to stop by afterwards...</td>
                        </tr>
                        <tr>
                            <td>You (Ottawa Senators) vs Toronto Maple leafs</td>
                            <td><a href='https://maps.app.goo.gl/ZiQSXe3o68s83xLJ8' target='_blank' className='evenetLocationLink'>Barbara Ann Scott Arena, 2250 Torquay Ave, Ottawa, ON</a></td>
                            <td>Friday, July 26th, 8:30pm</td>
                            <td>6-0 (W)</td>
                            <td>This team is not great, should be easy.</td>
                        </tr>
                        <tr>
                            <td>You (Ottawa Senators) @ Edmonton Oilers</td>
                            <td><a href='https://maps.app.goo.gl/qeP5ivGTjhhVRuQH6' target='_blank' className='evenetLocationLink'>J.A. Dulude Arena, 941 Clyde Ave, Ottawa, ON</a></td>
                            <td>Today, July 23th, 7:00pm</td>
                            <td>3-4 (L)</td>
                            <td>There's a bar accross the street if we want to stop by afterwards...</td>
                        </tr>
                        
                        
                    </tbody>
                </Table>
                <a href="#/dashboard" style={{textAlign:'left', textDecoration:'none', color:'black'}}>
                See 5 more events
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 2 16 14">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
                </svg>
              </a>
            </div>

            <h1 className='sectionTitle'>Your team stats:</h1>
            <div className="container">
                <Table bordered striped classname='statsTable' style={{border:'black'}}>
                <thead>
                    <tr>
                    <th className='tableHeadItem'>Player</th>
                    <th className='tableHeadItem'>Position</th>
                    <th className='tableHeadItem'>Games played</th>
                    <th className='tableHeadItem'>Goals</th>
                    <th className='tableHeadItem'>Assists</th>
                    <th className='tableHeadItem'>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Shane Pinto</td>
                    <td>Center</td>
                    <td>41</td>
                    <td>9</td>
                    <td>18</td>
                    <td>27</td>
                    </tr>
                    <tr>
                    <td>Brady Tkachuk</td>
                    <td>Left Wing</td>
                    <td>81</td>
                    <td>37</td>
                    <td>37</td>
                    <td>74</td>
                    </tr>
                    <tr>
                    <td>Thomas Chabot</td>
                    <td>Defence</td>
                    <td>51</td>
                    <td>9</td>
                    <td>21</td>
                    <td>30</td>
                    </tr>
                    <tr>
                    <td>Shane Pinto</td>
                    <td>Center</td>
                    <td>41</td>
                    <td>9</td>
                    <td>18</td>
                    <td>27</td>
                    </tr>
                    <tr>
                    <td>Brady Tkachuk</td>
                    <td>Left Wing</td>
                    <td>81</td>
                    <td>37</td>
                    <td>37</td>
                    <td>74</td>
                    </tr>
                    <tr>
                    <td>Thomas Chabot</td>
                    <td>Defence</td>
                    <td>51</td>
                    <td>9</td>
                    <td>21</td>
                    <td>30</td>
                    </tr>
                    <tr>
                    <td>Shane Pinto</td>
                    <td>Center</td>
                    <td>41</td>
                    <td>9</td>
                    <td>18</td>
                    <td>27</td>
                    </tr>
                    <tr>
                    <td>Brady Tkachuk</td>
                    <td>Left Wing</td>
                    <td>81</td>
                    <td>37</td>
                    <td>37</td>
                    <td>74</td>
                    </tr>
                    <tr>
                    <td>Thomas Chabot</td>
                    <td>Defence</td>
                    <td>51</td>
                    <td>9</td>
                    <td>21</td>
                    <td>30</td>
                    </tr>
                    <tr>
                    <td>Shane Pinto</td>
                    <td>Center</td>
                    <td>41</td>
                    <td>9</td>
                    <td>18</td>
                    <td>27</td>
                    </tr>
                    <tr>
                    <td>Brady Tkachuk</td>
                    <td>Left Wing</td>
                    <td>81</td>
                    <td>37</td>
                    <td>37</td>
                    <td>74</td>
                    </tr>
                    <tr>
                    <td>Thomas Chabot</td>
                    <td>Defence</td>
                    <td>51</td>
                    <td>9</td>
                    <td>21</td>
                    <td>30</td>
                    </tr>
                    <tr>
                    <td>Shane Pinto</td>
                    <td>Center</td>
                    <td>41</td>
                    <td>9</td>
                    <td>18</td>
                    <td>27</td>
                    </tr>
                    <tr>
                    <td>Brady Tkachuk</td>
                    <td>Left Wing</td>
                    <td>81</td>
                    <td>37</td>
                    <td>37</td>
                    <td>74</td>
                    </tr>
                    <tr>
                    <td>Thomas Chabot</td>
                    <td>Defence</td>
                    <td>51</td>
                    <td>9</td>
                    <td>21</td>
                    <td>30</td>
                    </tr>
                </tbody>
                </Table>
            </div>
            <Footer />
        </div>
    )
}