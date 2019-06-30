import { connect } from 'react-redux';
import Basics1 from './basics_1';

const mapStateToProps = (state) => {
    debugger
    let skills = state.entities.users[52].language_data[state.entities.users[52].learning_language].skills
    let currentSkill;
    skills.forEach(skill => {
        if(skill.url_title === "Basics-1") {
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
)(Basics1);
