import ListItem from '../../Components/ListItem'
import * as S from './styles'

import { thumbsData } from '../../utils/data/thumbsData'



const SideB = () => {

    return (
        <S.ContainerB>
            <S.TopBar>
                <input type="text" name="name" id="name" placeholder="Character's name" />
            </S.TopBar>
            <ul>
                {thumbsData.map((item) => (
                    <ListItem 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                    />
                ))}
            </ul>
        </S.ContainerB>
    )
}

export default SideB