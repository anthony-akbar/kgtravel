import React, {Component} from 'react';
import "./Blog.css";
import BlogItem from "./BlogItem/BlogItem";

class Blog extends Component {
    state = {
            data:[
                {
                    iframe: `<iframe title="leyla" width=\"852\" height=\"480\" src=\"https://www.youtube.com/embed/Pw_AluJ1P2E\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>`,
                    description: "Премьера клипа - Jah Khalib - Лейла ft. Маквин \n" +
                        "Сведение: Ернар Мырзабай, Нурболат Базарбаев\n" +
                        "Режиссер: Айсултан Сеитов\n" +
                        "Продюсеры: Истратов Станислав, Юлия Сафонова, Эдвард Мкхитарян, Даут Маканов\n" +
                        "Актеры: Tomas Decurgez, Gabriela Giardina\n" +
                        "Оператор: Азамат Дулатов, Евгений Козлов\n" +
                        "Монтаж: Константин Карпеев (OZIO)\n" +
                        "VFX: Игорь Четвертаков\n" +
                        "Цветокоррекция: Виталий Бужан\n" +
                        "Художник: Яна Веселова, Ильяс Турмахан\n" +
                        "Асистент режиссера: Леонид Андронов, Жандос Тунгушбаев\n" +
                        "AC: Cizko Quevedo\n" +
                        "Гафер: Lidia Nikonova\n" +
                        "Гример: Amber Bailey, Марасулова Дарья\n" +
                        "Стилист: Alexander Zoobrilin\n" +
                        "Грип: Gonzalo Digenio, Нурмат Сакебаев, Алишер Балфанбаев\n" +
                        "PA: Давид Кходжимирян, Мила Сомошкина, Женис Омаров\n" +
                        "Отдельное спасибо: Jim Pallett, Tom Hinds, Assem Yedgey\n" +
                        "QARA Production",
                    iframe2: "<iframe width=\"852\" height=\"480\" src=\"https://www.youtube.com/embed/KFWhRKh-bZo\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                    description2: "Режиссёр - Медет Шаяхметов \n" +
                        "Оператор - Азамат Дулатов\n" +
                        "Художник - Алия Косаева, Айым Акаева \n" +
                        "Визажист - Дарья Марасулова \n" +
                        "Гримёр - Татьяна Сивкова\n" +
                        "Администратор - Станислав Истратов, Даут Маканов. \n" +
                        "\n" +
                        "В главных ролях:\n" +
                        "Егор Лымарев\n" +
                        "Марина Аничкина",
                },
            ]
    }
    render() {
        return (
            <div>
                <div className="iframemain">
                    <iframe title="leyla" width="1280" height="720" src="https://www.youtube.com/embed/m96VzAzvb8Q" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <hr/>
                <div>
                    {this.state.data.map((item)=> <BlogItem {...item}/>)}
                </div>
            </div>
        );
    }
}

export default Blog;