import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DashboardBodyContainer from './dashboard_body_container';
import LanguageListItem from './language_list_item';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this)

    }
    logout() {
        this.props.logout()
    }
    renderBody(){
        
        if(this.props.languageData.length > 0) {
            return (

                <div className="dashboard-body">
                    <DashboardBodyContainer />
                </div>
                )
        }
    }
    renderAppropriateDashboard(){
        
    }
    restOfFlags(){
        
    }
       
    
    componentDidMount(){
        this.props.fetchLanguageDatas(this.props.currentUser)
        let calendars = this.props.currentUser.calendar
        
        if (calendars.length > 0) {

            // if there isn't a datetime from two days (or 25 hours) ago, set streak to 0
            let latest = calendars[0];
            let today = Date.now();
            let yesterday = today - 86400000
            
            for (let i = 0; i < calendars.length; i++) {
                if (calendars[i].datetime > latest.datetime) latest = calendars[i]
            }
            if (latest.datetime < yesterday) this.props.updateUser({"site_streak": 0})
        }

    }

    render() {
        
        let langs = Object.values(this.props.languageData).map((lang_data) => {
            let language = Object.values(this.props.currentUser.language_data)[0].language_string
            
            if (lang_data.language_string !== language) {
                return <LanguageListItem lang_data={lang_data} fetch={this.props.fetchLanguageData} user={this.props.currentUser} updateUser={this.props.updateUser}/>            

            }
        }, this)
        
        return (
            <>
            <div>
                <div className="dashboard-toppermost-div"></div> {/* spacing div */}
                <div> {/* generic div */}
                    <div className="dashboard-header">
                        <div className="dashboard-header-container">
                            {/* one little header block */}
                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/learn.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">learn</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>
                            {/* one little header block */}
                            <a href="" className="dashboard-header-blocks">
                                <img src="////d35aaqx5ub95lt.cloudfront.net/images/icons/stories-inactive2.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">stories</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>

                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/discuss-inactive.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">discuss</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>

                            <a href="https://jdarmoni.github.io/DuoProject/" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/shop-inactive2.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">Juolingo</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>

                            <a href="" className="dashboard-header-blocks">
                                <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/more-inactive.svg" className="dashboard-header-icon" />
                                <span className="dashboard-header-span">
                                    <span className="dashboard-header-text">more</span>
                                </span>
                            </a>
                            <div className="dashboard-spacer"></div>
                            {/* | right side  */}
                            <div className="dashboard-divider"></div>
                            <div className="dashboard-flag-section">
                                <span className="dashboard-flag-span-parent">
                                    <span className={`dashboard-flag-span-child dashboard-country-` + this.props.currentUser.learning_language_string }  ></span>
                                    <div className="dashboard-drop-down"> {/*  no styling*/}
                                        {/* stylings */}
                                        <div className="flag-container-list">
                                            <div> {/* no stylings*/}
                                                <div className="flag-box-sizer">
                                                    {/* each of these after the first one should have an onClick to return a new newState with a new language_data object */}
                                                    <div className="flag-language-box">
                                                            <span className={`dashboard-flag-span-child dashboard-country-` + this.props.currentUser.learning_language_string}  ></span>
                                                            <span className="flag-language-box-t-span">{this.props.currentUser.learning_language_string}</span>
                                                    </div>
                                                    {langs}
                                                </div>
                                                    <Link to={'/courses'}> <div className="add-language-box" >
                                                    {/* this div will link to courses component! */}
                                                    <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/add-course.svg" />
                                                    <span className="flag-language-box-t-span add-n-c">Add a new course</span>    
                                                </div></Link> 
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>

                            {/* progresses */}
                            <div className="dashboard-progress-section">
                                <span className="dashboard-progress-span-parent">
                                    <img src="//d35aaqx5ub95lt.cloudfront.net/images/juicy-crown-empty.svg" className="dashboard-progres-icon" />
                                    {/* need logic for determining and interpolating country */}
                                    <span className="dashboard-number-span">0</span>
                                </span>
                            </div>

                            <div className="dashboard-progress-section">
                                <span className="dashboard-progress-span-parent">
                                    <img src={this.props.site_streak} className="dashboard-progres-icon" />
                                    {/* need logic for determining and interpolating country */}
                                    <span className="dashboard-number-span">{this.props.currentUser.site_streak}</span>
                                </span>
                            </div>

                                <div className="dashboard-progress-section">
                                    <span className="dashboard-progress-span-parent">
                                        <img src="//d35aaqx5ub95lt.cloudfront.net/images/icons/lingot.svg" className="dashboard-progres-icon" />
                                        {/* need logic for determining and interpolating country */}
                                        <span className="dashboard-number-span">{this.props.currentUser.rupees}</span>
                                    </span>
                                </div>

                            <div className="dashboard-progress-section db-profile-section">
                                <span className="dashboard-progress-span-parent">
                                    <img src="//s3.amazonaws.com/duolingo-images/avatar/default_2/medium" className="dashboard-progres-icon dashboard-user-icon"  />
                                    <span className="dashboard-number-span"></span>

                                        <div className="dashboard-profile-drop-down"> {/*  no styling*/}
                                            {/* stylings */}
                                            <div className="profile-container-list">
                                                <div> {/* no stylings*/}
                                                    <div className="profile-box-sizer">
                                                        {/* each of these after the first one should have an onClick to return a new newState with a new language_data object */}
                                                        <div className="profile-option-box">
                                                            <div className="db-profile-header-div">Account</div>
                                                            <span className="db-option-span" onClick={this.logout}>Logout</span>                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {this.renderBody()}
            </>
        )
    }
}
export default withRouter(Dashboard)

