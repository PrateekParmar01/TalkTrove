import { connect } from 'react-redux';
import Greetings from './greetings';

const mapStateToProps = (state) => {
    
    let user = Object.values(state.entities.users)[0]
    let skills = user.language_data[user.learning_language].skills
    let currentSkill;
    skills.forEach(skill => {
        if (skill.url_title === "Greetings") {
            currentSkill = skill
        }
    });
    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id],
        languages: state.entities.languages,
        skill: currentSkill
    };
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greetings);
