import { simplifiedManagementData } from "@/constants";
import Image from "next/image";

import groups from "../../public/icons/groups.svg";
import playCircle from "../../public/icons/play_circle.svg";
import school from "../../public/icons/school.svg";
import teacherWithHerStudents from "../../public/images/teacher-with-her-students.webp";

export function SimplifiedManagement() {
  return (
    <section className="max-container py-5 grid grid-cols-2 max-lg:grid-cols-1">
      <div className="col-span-1">
        <span className="subtitle-text">Nosso Software</span>
        <h2 className="title-text">Gestão Simplificada</h2>

        <p className="info-text pr-9 mt-7">
          Nosso software de gestão educacional oferece um conjunto abrangente de
          funcionalidades para atender às necessidades específicas das
          instituições de ensino. Gerencie alunos, turmas, matrículas, notas,
          frequência, calendários acadêmicos e muito mais em uma única
          plataforma fácil de usar.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 my-8 text-primary-dark">
          <div className="text-3xl flex gap-4">
            <Image src={school} alt="school" width={44} height={44} />
            <div>
              <span className="font-bold">
                {simplifiedManagementData.customers}+
              </span>
              <p className="info-text">Clientes</p>
            </div>
          </div>

          <div className="text-3xl flex gap-4">
            <Image src={groups} alt="groups" width={44} height={44} />
            <div>
              <span className="font-bold">
                {simplifiedManagementData.developers}+
              </span>
              <p className="info-text">Desenvolvedores</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 relative hover:brightness-75 transition-all cursor-pointer">
        <Image
          src={teacherWithHerStudents}
          alt="teacher with her students"
          className="media max-md:h-[300px] h-[380px] object-cover justify-self-center"
          placeholder="blur"
          width={615}
          height={380}
          quality={100}
        />
        {/* <span
            className='material-symbols-rounded text-8xl text-primary-dark
            absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]'
          >
            play_circle
          </span> */}
        <Image
          src={playCircle}
          alt="play circle"
          width={96}
          height={96}
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
