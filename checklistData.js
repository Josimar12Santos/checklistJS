// checklistData.js

const EQUIPMENT_CHECKLISTS = {
    // Exemplo de perguntas para Empilhadeira_001
    'EMPILHADEIRA_001': {
        name: 'Empilhadeira - Modelo X',
        questions: [
            { id: 'pneus', text: 'Condições dos pneus (desgaste, calibragem, danos)', type: 'radio' },
            { id: 'oleo', text: 'Vazamentos de óleo/fluido (motor, transmissão, hidráulico)', type: 'radio' },
            { id: 'freios', text: 'Funcionamento dos freios (pedal, estacionamento)', type: 'radio' },
            { id: 'iluminacao', text: 'Sistema de iluminação (faróis, setas, luz de ré)', type: 'radio' },
            { id: 'bateria', text: 'Nível da bateria/Combustível e conexões (carga, limpeza)', type: 'radio' }
        ]
    },
    // Exemplo de perguntas para Talha_003
    'TALHA_003': {
        name: 'Talha Elétrica - Modelo Y',
        questions: [
            { id: 'cabo_aco', text: 'Condição do cabo de aço (desgaste, fios rompidos)', type: 'radio' },
            { id: 'gancho', text: 'Estado do gancho (deformações, trava de segurança)', type: 'radio' },
            { id: 'limites', text: 'Funcionamento dos limites de fim de curso (superior/inferior)', type: 'radio' },
            { id: 'botoeira', text: 'Condição da botoeira de comando (botões, cabo)', type: 'radio' },
            { id: 'lubrificacao', text: 'Sinais de vazamento ou necessidade de lubrificação', type: 'radio' }
        ]
    },
    // Exemplo de perguntas para outro equipamento
    'MAQUINA_CORTE_LASER_002': {
        name: 'Máquina de Corte a Laser',
        questions: [
            { id: 'lentes', text: 'Limpeza e integridade das lentes do laser', type: 'radio' },
            { id: 'ventilacao', text: 'Sistema de exaustão e ventilação (obstruções)', type: 'radio' },
            { id: 'emergencia', text: 'Funcionamento do botão de emergência', type: 'radio' },
            { id: 'refrigeracao', text: 'Nível e circulação do líquido de refrigeração', type: 'radio' },
            { id: 'seguranca', text: 'Verificação das barreiras de segurança e proteções', type: 'radio' }
        ]
    },

    'EMPILHADEIRA_TOYOTA': {
        name: 'Empilhadeira Toyota',
        questions: [
            { id: 'pneus', text: 'Condições dos pneus (calibragem, desgaste, cortes)', type: 'radio' },
            { id: 'freios', text: 'Funcionamento dos freios (pedal e freio de estacionamento)', type: 'radio' },
            { id: 'nivel_oleo', text: 'Verificação de vazamentos e nível de óleo do motor', type: 'radio' },
            { id: 'hidraulico', text: 'Verificação do sistema hidráulico (mangueiras e conexões)', type: 'radio' },
            { id: 'bateria', text: 'Carga e fixação da bateria', type: 'radio' },
            { id: 'luzes', text: 'Verificação das luzes (faróis, ré, setas)', type: 'radio' },
            { id: 'alarme_re', text: 'Funcionamento do alarme de ré e buzina', type: 'radio' },
            { id: 'garfos', text: 'Condição dos garfos (trincas, empeno, fixação)', type: 'radio' },
            { id: 'painel', text: 'Avisos no painel de instrumentos', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza geral e ausência de objetos soltos na cabine', type: 'radio' }
        ]
    },
    
    'EMPILHADEIRA_YALE': {
        name: 'Empilhadeira Yale',
        questions: [
            { id: 'pneus', text: 'Condições dos pneus (calibragem, desgaste, cortes)', type: 'radio' },
            { id: 'nivel_combustivel', text: 'Nível de combustível e/ou carga da bateria', type: 'radio' },
            { id: 'oleo_motor', text: 'Nível e vazamento de óleo do motor', type: 'radio' },
            { id: 'sistema_frenagem', text: 'Funcionamento dos freios e freio de estacionamento', type: 'radio' },
            { id: 'sinalizacao', text: 'Funcionamento da buzina, faróis e setas', type: 'radio' },
            { id: 'coluna_direcao', text: 'Folgas ou ruídos na direção', type: 'radio' },
            { id: 'garfos', text: 'Condição e alinhamento dos garfos', type: 'radio' },
            { id: 'mastro', text: 'Verificação do mastro e corrente de elevação', type: 'radio' },
            { id: 'painel_instr', text: 'Indicadores e alertas do painel', type: 'radio' },
            { id: 'cinto', text: 'Integridade e funcionamento do cinto de segurança', type: 'radio' }
        ]
    },


    'TALHA_CORRENTE': {
        name: 'Talha Elétrica de Corrente',
        questions: [
            { id: 'corrente', text: 'Estado da corrente (oxidação, desgaste, lubrificação)', type: 'radio' },
            { id: 'gancho', text: 'Condições do gancho (trava, deformações)', type: 'radio' },
            { id: 'fim_curso', text: 'Funcionamento do fim de curso', type: 'radio' },
            { id: 'estrutura', text: 'Fixação e estrutura da talha', type: 'radio' },
            { id: 'botoeira', text: 'Funcionamento da botoeira de comando', type: 'radio' },
            { id: 'sinal_sonoro', text: 'Verificação do alarme sonoro (se aplicável)', type: 'radio' },
            { id: 'tensao_alimentacao', text: 'Condições dos cabos e tensão de alimentação', type: 'radio' },
            { id: 'lubrificacao_corrente', text: 'Necessidade de lubrificação da corrente', type: 'radio' },
            { id: 'isolamento', text: 'Integridade dos cabos e isolamentos', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza e ausência de obstruções na área', type: 'radio' }
        ]
    },

    'TALHA_CABO_ACO': {
        name: 'Talha Elétrica de Cabo de Aço',
        questions: [
            { id: 'cabo_aco', text: 'Estado do cabo de aço (fios rompidos, desgaste)', type: 'radio' },
            { id: 'tambor', text: 'Enrolamento correto do cabo no tambor', type: 'radio' },
            { id: 'gancho', text: 'Trava de segurança e deformações no gancho', type: 'radio' },
            { id: 'fim_curso', text: 'Funcionamento dos interruptores de fim de curso', type: 'radio' },
            { id: 'estrutura', text: 'Verificação da fixação da talha', type: 'radio' },
            { id: 'botoeira', text: 'Integridade e funcionamento da botoeira', type: 'radio' },
            { id: 'motores', text: 'Ruídos ou aquecimento anormal nos motores', type: 'radio' },
            { id: 'lubrificacao', text: 'Condições de lubrificação dos componentes móveis', type: 'radio' },
            { id: 'cabo_alimentacao', text: 'Integridade do cabo de alimentação', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza do equipamento e da área ao redor', type: 'radio' }
        ]
    },

    'ESMERIL': {
        name: 'Esmeril',
        questions: [
            { id: 'disco', text: 'Condição do disco abrasivo (trincas, desgaste)', type: 'radio' },
            { id: 'protecao', text: 'Presença e fixação da proteção do disco', type: 'radio' },
            { id: 'apoio_peca', text: 'Estado do apoio de peça (ajuste e fixação)', type: 'radio' },
            { id: 'motor', text: 'Funcionamento do motor (ruídos, aquecimento)', type: 'radio' },
            { id: 'vibracao', text: 'Verificação de vibrações anormais', type: 'radio' },
            { id: 'interruptor', text: 'Funcionamento do botão de acionamento', type: 'radio' },
            { id: 'cabos', text: 'Condições dos cabos elétricos e plugues', type: 'radio' },
            { id: 'base', text: 'Fixação da base do esmeril', type: 'radio' },
            { id: 'epc', text: 'Uso de EPI adequado (óculos, protetor auricular)', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza e ausência de detritos ao redor', type: 'radio' }
        ]
    },

    'COMPRESSOR_SCHULZ': {
        name: 'Compressor Schulz',
        questions: [
            { id: 'oleo', text: 'Verificação do nível de óleo lubrificante', type: 'radio' },
            { id: 'filtros', text: 'Condições dos filtros de ar', type: 'radio' },
            { id: 'drenagem', text: 'Drenagem do reservatório de ar (água condensada)', type: 'radio' },
            { id: 'correias', text: 'Tensão e estado das correias (se aplicável)', type: 'radio' },
            { id: 'pressostato', text: 'Funcionamento do pressostato', type: 'radio' },
            { id: 'vazamentos', text: 'Verificação de vazamentos de ar', type: 'radio' },
            { id: 'temperatura', text: 'Aquecimento excessivo do motor ou cabeçote', type: 'radio' },
            { id: 'partida', text: 'Verificação do sistema de partida', type: 'radio' },
            { id: 'cabos', text: 'Condições dos cabos e conexões elétricas', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza geral do equipamento', type: 'radio' }
        ]
    },

    'TORNO_CNC': {
        name: 'Torno CNC',
        questions: [
            { id: 'painel', text: 'Funcionamento do painel de controle', type: 'radio' },
            { id: 'lubrificacao', text: 'Sistema de lubrificação funcionando corretamente', type: 'radio' },
            { id: 'ferramentas', text: 'Verificação do estado das ferramentas de corte', type: 'radio' },
            { id: 'refrigerante', text: 'Nível e circulação do fluido refrigerante', type: 'radio' },
            { id: 'porta', text: 'Travas e sensores das portas de segurança', type: 'radio' },
            { id: 'ruidos', text: 'Ausência de ruídos anormais durante a operação', type: 'radio' },
            { id: 'cabos', text: 'Integridade dos cabos elétricos e conectores', type: 'radio' },
            { id: 'eixo', text: 'Verificação dos eixos quanto a folgas ou travamentos', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza interna e externa da máquina', type: 'radio' },
            { id: 'software', text: 'Sistema operacional e programas carregados corretamente', type: 'radio' }
        ]
    },

    'FRESA': {
        name: 'Fresa',
        questions: [
            { id: 'ferramenta', text: 'Condição da fresa/ferramenta de corte', type: 'radio' },
            { id: 'morsa', text: 'Fixação da peça e estado da morsa', type: 'radio' },
            { id: 'lubrificacao', text: 'Sistema de lubrificação funcionando corretamente', type: 'radio' },
            { id: 'motor', text: 'Funcionamento e ruído do motor', type: 'radio' },
            { id: 'translacao', text: 'Movimentação dos eixos (manual ou CNC)', type: 'radio' },
            { id: 'tabela', text: 'Fixação e alinhamento da mesa de trabalho', type: 'radio' },
            { id: 'protecoes', text: 'Presença de proteções móveis e fixas', type: 'radio' },
            { id: 'interruptor', text: 'Funcionamento do botão de emergência', type: 'radio' },
            { id: 'cabos', text: 'Cabos e conexões elétricas em bom estado', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza da máquina e da área de trabalho', type: 'radio' }
        ]
    },

    'EXAUSTOR_POEIRA': {
        name: 'Exaustor de Poeira',
        questions: [
            { id: 'filtro', text: 'Condições dos filtros de pó', type: 'radio' },
            { id: 'tubulacao', text: 'Obstruções ou vazamentos na tubulação', type: 'radio' },
            { id: 'motor', text: 'Funcionamento do motor e nível de ruído', type: 'radio' },
            { id: 'ventoinha', text: 'Integridade e fixação da ventoinha', type: 'radio' },
            { id: 'sistema_partida', text: 'Funcionamento do sistema de acionamento', type: 'radio' },
            { id: 'suporte', text: 'Fixação e estrutura de suporte do exaustor', type: 'radio' },
            { id: 'cabos', text: 'Integridade dos cabos e conexões elétricas', type: 'radio' },
            { id: 'coleta', text: 'Verificação do compartimento/coletor de pó', type: 'radio' },
            { id: 'vibracoes', text: 'Presença de vibrações excessivas', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza do sistema e da área ao redor', type: 'radio' }
        ]
    },

    'TORRE_REFRIGERACAO': {
        name: 'Torre de Refrigeração',
        questions: [
            { id: 'agua', text: 'Nível e qualidade da água no reservatório', type: 'radio' },
            { id: 'ventilador', text: 'Funcionamento do ventilador', type: 'radio' },
            { id: 'bomba', text: 'Funcionamento da bomba de recirculação', type: 'radio' },
            { id: 'tubulacao', text: 'Verificação de obstruções ou vazamentos nas tubulações', type: 'radio' },
            { id: 'motores', text: 'Temperatura e ruído dos motores elétricos', type: 'radio' },
            { id: 'estrutura', text: 'Integridade da estrutura externa', type: 'radio' },
            { id: 'cabos', text: 'Verificação das conexões elétricas', type: 'radio' },
            { id: 'painel', text: 'Verificação do painel de comando', type: 'radio' },
            { id: 'corrosao', text: 'Presença de ferrugem ou corrosão', type: 'radio' },
            { id: 'limpeza', text: 'Limpeza geral da torre e bandejas', type: 'radio' }
        ]
    }
    // Adicione mais equipamentos e suas 5 perguntas aqui
};

/*
const EQUIPMENT_CHECKLISTS = {
    // Exemplo de perguntas para Empilhadeira_001
    'EMPILHADEIRA_001': {
        name: 'Empilhadeira - Modelo X',
        questions: [
            { id: 'pneus', text: 'As condições dos pneus (desgaste, calibragem, danos)', type: 'radio' },
            { id: 'oleo', text: 'Vazamentos de óleo/fluido (motor, transmissão, hidráulico)', type: 'radio' },
            { id: 'freios', text: 'Funcionamento dos freios (pedal, estacionamento)', type: 'radio' },
            { id: 'iluminacao', text: 'Sistema de iluminação (faróis, setas, luz de ré)', type: 'radio' },
            { id: 'bateria', text: 'Nível da bateria/Combustível e conexões (carga, limpeza)', type: 'radio' }
        ]
    },
    // Exemplo de perguntas para Talha_003
    'TALHA_003': {
        name: 'Talha Elétrica - Modelo Y',
        questions: [
            { id: 'cabo_aco', text: 'Condição do cabo de aço (desgaste, fios rompidos)', type: 'radio' },
            { id: 'gancho', text: 'Estado do gancho (deformações, trava de segurança)', type: 'radio' },
            { id: 'limites', text: 'Funcionamento dos limites de fim de curso (superior/inferior)', type: 'radio' },
            { id: 'botoeira', text: 'Condição da botoeira de comando (botões, cabo)', type: 'radio' },
            { id: 'lubrificacao', text: 'Sinais de vazamento ou necessidade de lubrificação', type: 'radio' }
        ]
    },
    // Exemplo de perguntas para outro equipamento
    'MAQUINA_CORTE_LASER_002': {
        name: 'Máquina de Corte a Laser',
        questions: [
            { id: 'lentes', text: 'Limpeza e integridade das lentes do laser', type: 'radio' },
            { id: 'ventilacao', text: 'Sistema de exaustão e ventilação (obstruções)', type: 'radio' },
            { id: 'emergencia', text: 'Funcionamento do botão de emergência', type: 'radio' },
            { id: 'refrigeracao', text: 'Nível e circulação do líquido de refrigeração', type: 'radio' },
            { id: 'seguranca', text: 'Verificação das barreiras de segurança e proteções', type: 'radio' }
        ]
    }
    // Adicione mais equipamentos e suas 5 perguntas aqui
};
*/

