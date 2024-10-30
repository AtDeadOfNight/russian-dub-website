import { Person } from '@/entities/person'
import Viktor from '@/assets/team/viktor.webp'
import Andrey from '@/assets/team/andrey.webp'
import Anna from '@/assets/team/anna.webp'
import Veronika from '@/assets/team/veronika.webp'
import Anastasia from '@/assets/team/anastasia.webp'
import AleksandrKovrizhnyh from '@/assets/team/aleksandr_kovrizhnyh.webp'
import AleksandrKremnev from '@/assets/team/aleksandr_kremnev.webp'
import Anatoliy from '@/assets/team/anatoliy.webp'
import Alice from '@/assets/team/alice.webp'
import UncleKnuckles from '@/assets/team/uncleknuckles.webp'
import Valeria from '@/assets/team/valeria.webp'

import Jimmy1 from '@/assets/audio/jimmy1.mp3'
import Jimmy2 from '@/assets/audio/jimmy2.mp3'
import Jimmy3 from '@/assets/audio/jimmy3.mp3'
import Maya1 from '@/assets/audio/maya1.mp3'
import Maya2 from '@/assets/audio/maya2.mp3'
import Maya3 from '@/assets/audio/maya3.mp3'
import Amy1 from '@/assets/audio/amy1.mp3'
import Amy2 from '@/assets/audio/amy2.mp3'
import Amy3 from '@/assets/audio/amy3.mp3'
import Rose1 from '@/assets/audio/rose1.mp3'
import Rose2 from '@/assets/audio/rose2.mp3'
import Hannah from '@/assets/audio/hannah.mp3'
import Bose1 from '@/assets/audio/bose1.mp3'
import Bose2 from '@/assets/audio/bose2.mp3'
import Hugo from '@/assets/audio/hugo.mp3'
import Harvey1 from '@/assets/audio/harvey1.mp3'
import Harvey2 from '@/assets/audio/harvey2.mp3'
import Police from '@/assets/audio/police.mp3'
import Journalist2 from '@/assets/audio/journalist.mp3'

export function Team() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-fit gap-2 bg-team p-4 xs:p-8 sm:p-16 1370px:p-32'>
      <div className='flex-1 flex flex-col items-center gap-10 text-shadow'>
        <h2 className='text-6xl'>Команда</h2>
        <div className='flex flex-col gap-10 items-center'>
          <div className='flex items-start gap-5'>
            <Person
              name='Виктор' 
              aka='hloth' 
              role='Автор идеи, спонсор, организатор, кастинг, программирование, пост-обработка' 
              wide
              link='https://hloth.dev'
              avatar={Viktor}
            />
          </div>
          <div className='flex items-start gap-5 flex-wrap justify-center'>
            <Person
              avatar={Andrey}
              name={'Андрей\nВальц'}
              aka='Голос Джокера'
              role='Голос Джимми'
              audio={[Jimmy1, Jimmy2, Jimmy3]}
            />
            <Person
              name={'Александр\nКоврижных'}
              role='Голос Доктора Боуза'
              avatar={AleksandrKovrizhnyh}
              audio={[Bose1, Bose2]}
            />
            <Person 
              name='Uncle Knuckles'
              role='Голос Харви'
              avatar={UncleKnuckles}
              audio={[Harvey1, Harvey2]}
            />
            <Person 
              name='Анатолий Нокс'
              role='Голос Хьюго'
              avatar={Anatoliy}
              audio={[Hugo]}
            />
          </div>
          <div className='flex items-start gap-5 flex-wrap justify-center'>
            <Person 
              name={'Вероника\nВаздар'}
              role='Голос Майи'
              audio={[Maya1, Maya2, Maya3]}
              avatar={Veronika}
            />
            <Person 
              name={'Анастасия\nШитикова'}
              role='Голос Эмми'
              audio={[Amy1, Amy2, Amy3]}
              avatar={Anastasia}
            />
            <Person 
              name={'Анна\nЛукина'}
              role='Голос Роуз'
              audio={[Rose1, Rose2]}
              avatar={Anna}
            />
            <Person 
              name={'Валерия\nКруглова'}
              role='Голос Ханны'
              audio={[Hannah]}
              avatar={Valeria}
            />
          </div>
          <div className='flex items-start gap-5 flex-wrap justify-center'>
            <Person 
              name={'Александр\nКремнев'}
              role='Голос Журналиста и Полицейского'
              avatar={AleksandrKremnev}
              audio={[Police]}
            />
            <Person 
              name={'Алиса\nГримм'}
              role='Голос Журналиста 2'
              avatar={Alice}
              audio={[Journalist2]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}