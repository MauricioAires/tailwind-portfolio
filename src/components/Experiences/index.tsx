'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'
import { Play } from 'lucide-react'
import { formatDistanceStrict } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function Experiences() {
  const [currentTab, setCurrentTab] = useState<string>('DCB Company')

  function calculateCompanyTime(dateStart: string, dateEnd?: string) {
    return formatDistanceStrict(
      new Date(dateStart),
      new Date(dateEnd ?? new Date()),
      {
        locale: ptBr,
        roundingMethod: 'round',
      },
    )
  }

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="flex flex-col lg:flex-row"
      orientation="vertical"
    >
      <Tabs.TabsList className="w-100 mt-6 flex flex-col items-start gap-2  border-l-2 dark:border-airs-light-navy ">
        <TabItem
          isSelected={currentTab === 'DCB Company'}
          title="DCB Company"
        />
        <TabItem isSelected={currentTab === 'Brisanet'} title="Brisanet" />
        <TabItem isSelected={currentTab === 'Evocorp'} title="Evocorp" />
      </Tabs.TabsList>
      <div className="ml-10 flex-1">
        <Tabs.Content value="DCB Company" className="w-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/dbc-company"
            className="mb-2 cursor-pointer text-xl font-bold text-airs-green transition-all  hover:underline"
          >
            @DBC Company
          </a>
          <p className="mb-10 text-airs-white">
            Tempo integral • {calculateCompanyTime('11-01-2022')}
          </p>

          <ul className="flex flex-col gap-5">
            <li>
              <div className="flex items-start gap-2">
                <Play className="mt-px h-4 w-4 text-airs-green" />

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-airs-white">
                    Fullstack Pleno
                  </h3>
                  <span className="text-sm text-airs-white">
                    jul de 2023 - o momento
                  </span>
                </div>
              </div>
              <p className="ml-6 mt-8">
                Atuando como desenvolvedor backend com NodeJS e como frontend
                utilizando React em uma aplicação do segmento bancário
              </p>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Play className="mt-px h-4 w-4 text-airs-green" />

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-airs-white">
                    Frontend Pleno
                  </h3>
                  <span className="text-sm text-airs-white">
                    set de 2022 - jul de 2023
                  </span>
                </div>
              </div>
              <p className="ml-6 mt-8">
                Fui responsável pela arquitetura de micro front-end de um
                software de gerenciamento de sugestões geradas a partir do Smart
                Assortment. Atuei em uma equipe ágil, trabalhando no
                desenvolvimento e manutenção do software. Além disso,
                desempenhei o papel de referência técnica em front-end e forneci
                apoio diário às equipes responsáveis por criar e validar Pull
                Requests (PRs). Durante o desenvolvimento, utilizei RTL e Jest
                para garantir uma cobertura de testes de 80%. Mantive um alto
                padrão de qualidade nos testes e assegurei que a maioria dos
                cenários estivesse coberta.
              </p>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="Brisanet" className="w-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/brisanettelecom/"
            className="mb-2 cursor-pointer text-xl font-bold text-airs-green transition-all  hover:underline"
          >
            @Brisanet
          </a>
          <p className="mb-10 text-airs-white">
            Tempo integral • {calculateCompanyTime('08-01-2019', '11-01-2022')}
          </p>

          <ul className="flex flex-col gap-5">
            <li>
              <div className="flex items-start gap-2">
                <Play className="mt-px h-4 w-4 text-airs-green" />

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-airs-white">
                    Frontend Júnior II
                  </h3>
                  <span className="text-sm text-airs-white">
                    set de 2021 - set de 202
                  </span>
                </div>
              </div>
              <p className="ml-6 mt-8">
                Fui responsável pelo desenvolvimento de componentes e páginas do
                principal CRM da empresa utilizando Angular e Ant Design. Todos
                os componentes foram testados utilizando Jest.
              </p>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Play className="mt-px h-4 w-4 text-airs-green" />

                <div>
                  <h3 className="flex items-center gap-2 font-semibold text-airs-white">
                    Frontend Júnior I
                  </h3>
                  <span className="text-sm text-airs-white">
                    ago de 2019 - set de 2022
                  </span>
                </div>
              </div>
              <p className="ml-6 mt-8">
                Fui responsável pelo desenvolvimento completo de um SPA
                utilizando AngularJS no frontend e PHP no backend para as
                principais regras de negócio do sistema. Também implementei um
                sistema de notificação em tempo real utilizando NodeJS e
                Websocket. Nesse sistema, foi possível gerenciar uma base de
                clientes para realizar pesquisas de satisfação para a maior
                empresa de telecomunicações do Nordeste do Brasil. A
                implementação desse sistema foi fundamental para reduzir a
                dependência de planilhas, consequentemente diminuindo o trabalho
                manual e a quantidade de erros nos processos. Após a
                implementação bem-sucedida desse sistema, a empresa obteve o
                selo RA1000 do Reclame AQUI, o que comprova a qualidade do
                serviço prestado.
              </p>
            </li>
          </ul>
        </Tabs.Content>
        <Tabs.Content value="Evocorp" className="w-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/evocorp"
            className="mb-2 cursor-pointer text-xl font-bold text-airs-green transition-all  hover:underline"
          >
            @EVOCORP
          </a>
          <p className="mb-10 text-airs-white">
            Estágio • {calculateCompanyTime('07-01-2018', '12-01-2018')}
          </p>

          <ul className="flex flex-col gap-5">
            <li>
              <div className="flex items-start gap-2">
                <Play className="mt-px h-4 w-4 text-airs-green" />

                <div className="flex items-start gap-2">
                  <h3 className="flex items-center gap-2 text-airs-white">
                    Trainee
                  </h3>
                  <span className="text-sm text-airs-white">
                    jul de 2023 - o momento
                  </span>
                </div>
              </div>
              <p className="ml-6 mt-8">
                Realizei um estágio na EVOCORP, uma empresa de consultoria e
                assessoria empresarial, onde tive minha primeira experiência com
                o React. Além de trabalhar no desenvolvimento frontend, também
                fui responsável pelo design da nova plataforma de comércio
                eletrônico básico para aprimorar meu conhecimento em React e
                SEO.
              </p>
            </li>
          </ul>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  )
}
