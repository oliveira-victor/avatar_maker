import ListItem from '../../Components/ListItem'
import * as S from './styles'

const SideB = () => {
    return (
        <div>
            <S.TopBar>
                <input type="text" name="name" id="name" placeholder="Character's name" />
            </S.TopBar>
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    )
}

export default SideB