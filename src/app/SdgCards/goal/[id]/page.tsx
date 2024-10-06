'use client'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const cards = [
    {
      id: 1,
      title: "No Poverty",
      content: `Poverty is a multifaceted issue that affects millions of people worldwide. SDG 1 aims to eradicate extreme poverty, defined as living on less than $1.90 a day, by 2030. Poverty isn't just about income; it encompasses hunger, malnutrition, lack of access to essential services like healthcare and education, and social exclusion. In many developing countries, poverty rates remain high, and economic inequality continues to widen, leaving large segments of the population vulnerable to economic shocks.
  
                This goal emphasizes the need for social protection systems, sustainable job creation, and equal access to basic services. One of the key strategies to combat poverty is to promote inclusive economic growth that benefits all, especially the poorest. Countries are encouraged to adopt policies that promote equitable resource distribution and strengthen their ability to respond to economic crises. Providing equal opportunities in education and employment also plays a crucial role in empowering individuals to break the cycle of poverty.
  
                International cooperation and partnerships are crucial to achieving this goal, particularly in low-income countries. Many governments lack the resources necessary to develop robust social protection systems or to create jobs on the scale required. Global partnerships can provide much-needed technical and financial assistance. Additionally, increasing investments in infrastructure, education, and healthcare can significantly reduce poverty rates. SDG 1 recognizes that achieving a world free of poverty requires tackling the root causes of inequality and ensuring that all people can participate in the global economy.`,
      imageUrl: "/images/no-poverty.jpg",
    },
    {
      id: 2,
      title: "Zero Hunger",
      content: `Hunger and malnutrition continue to be critical global challenges, with millions of people suffering from food insecurity. SDG 2 aims to end hunger, achieve food security, improve nutrition, and promote sustainable agriculture. Currently, more than 690 million people go to bed hungry every night, and hunger is not only a result of insufficient food production but also of unequal access to resources. Ensuring everyone has access to enough nutritious food is crucial to combating the devastating effects of hunger on health and human development.
  
                One key component of achieving this goal is promoting sustainable agriculture. Sustainable farming practices can help increase food production without causing further environmental damage, ensuring long-term food security. This includes improving smallholder farmers' access to resources, such as land, water, and technology, and enhancing their ability to adapt to climate change. These efforts can help build resilient food systems capable of withstanding crises like droughts, floods, or pandemics.
  
                Addressing food waste is also vital to achieving Zero Hunger. Every year, about one-third of all food produced globally is lost or wasted, even as millions remain hungry. Reducing food loss in production and distribution chains can significantly increase food availability. Governments, businesses, and consumers all play a role in reducing food waste and ensuring that the food system is more equitable and sustainable. Global cooperation and investment in agriculture, research, and rural development are critical to achieving SDG 2.`,
      imageUrl: "/images/zero-hunger.jpg",
    },
    {
      id: 3,
      title: "Good Health and Well-Being",
      content: `Good health is central to human happiness and well-being. SDG 3 focuses on ensuring healthy lives and promoting well-being for people of all ages. It aims to reduce maternal and child mortality, combat diseases such as HIV/AIDS, tuberculosis, malaria, and non-communicable diseases, and ensure universal access to quality healthcare services. Inadequate healthcare systems, poor access to essential medicines, and the rising burden of mental health issues are just a few of the challenges facing global health today.
  
                Achieving universal health coverage (UHC) is critical to reaching this goal. UHC means that all people have access to the health services they need without suffering financial hardship. It requires strengthening healthcare systems, improving access to affordable medicines and vaccines, and increasing investments in medical research and development. The COVID-19 pandemic highlighted the importance of robust healthcare infrastructure, exposing the vulnerabilities of healthcare systems in even the wealthiest countries.
  
                Promoting health education and disease prevention is equally important. Many diseases, including non-communicable ones like heart disease, diabetes, and cancer, are preventable through lifestyle changes, early detection, and treatment. Ensuring access to clean water, sanitation, and hygiene also plays a crucial role in preventing the spread of infectious diseases. Achieving good health and well-being for all requires coordinated efforts at the global, national, and local levels to address these wide-ranging health challenges.`,
      imageUrl: "/images/good-health.jpg",
    },
    {
      id: 4,
      title: "Quality Education",
      content: `Education is a powerful tool for breaking the cycle of poverty and fostering sustainable development. SDG 4 aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. Millions of children, particularly in low-income countries and conflict zones, are denied the right to education due to poverty, gender discrimination, and lack of infrastructure. Ensuring that every child has access to quality education is essential for building a fairer and more prosperous world.
  
                Quality education goes beyond access to schooling; it focuses on ensuring that children and young people acquire the knowledge and skills needed for sustainable development. This includes proficiency in reading, writing, and mathematics, as well as the skills required to meet the challenges of the 21st century, such as critical thinking, problem-solving, and digital literacy. Inclusive education also means ensuring that marginalized groups, including girls, children with disabilities, and those in conflict-affected areas, receive quality education.
  
                To achieve this goal, governments and international organizations must invest in educational infrastructure, teacher training, and learning materials. Partnerships between the public and private sectors can help bridge the funding gap in education, especially in underserved regions. Ensuring that education systems are resilient to crises, such as pandemics, and incorporating digital learning technologies are crucial for achieving quality education for all.`,
      imageUrl: "/images/quality-education.jpg",
    },
    {
      id: 5,
      title: "Gender Equality",
      content: `Gender equality is not only a fundamental human right but also a necessary foundation for a peaceful, prosperous, and sustainable world. SDG 5 aims to achieve gender equality and empower all women and girls. Despite significant progress in some areas, gender inequality remains a pervasive issue worldwide, manifesting in discrimination in employment, education, healthcare, and political participation. Achieving gender equality requires eliminating violence against women and girls, ensuring equal opportunities in all spheres of life, and addressing harmful cultural norms and practices.
  
                One of the most visible forms of gender inequality is the gender pay gap, where women earn less than men for the same work. This gap widens in lower-income countries and in sectors where women are underrepresented in leadership roles. Additionally, women are disproportionately affected by unpaid care and domestic work, limiting their economic opportunities. Achieving gender equality requires promoting policies that support equal pay, decent work conditions, and social protection systems.
  
                Violence against women and girls remains a significant barrier to achieving gender equality. Ending all forms of violence, including domestic violence, sexual exploitation, and harmful practices such as child marriage and female genital mutilation, is essential for empowering women and girls. Ensuring access to sexual and reproductive health services and education is also critical. Governments, communities, and international organizations must work together to address these challenges and create a more equal world for women and men alike.`,
      imageUrl: "/images/gender-equality.jpg",
    },
    {
      id: 6,
      title: "Clean Water and Sanitation",
      content: `Access to clean water and sanitation is a basic human right, yet billions of people still lack access to these essential services. SDG 6 aims to ensure availability and sustainable management of water and sanitation for all. Water is fundamental to human health, agriculture, and ecosystems, but water scarcity, poor infrastructure, and inadequate sanitation contribute to the global water crisis. In many parts of the world, access to clean drinking water is limited, and untreated wastewater pollutes water bodies, posing serious health risks.
  
                One of the primary targets of SDG 6 is to achieve universal and equitable access to safe and affordable drinking water. This requires investments in water infrastructure, improving water-use efficiency, and promoting sustainable management of water resources. Proper sanitation is equally important. Millions of people lack access to basic sanitation facilities, leading to the spread of waterborne diseases such as cholera and dysentery. Ensuring that everyone has access to adequate sanitation facilities, including proper handwashing stations, is crucial to improving public health.
  
                Climate change exacerbates water-related challenges. As droughts, floods, and extreme weather events become more frequent, water resources become more vulnerable. Sustainable water management practices, such as rainwater harvesting, efficient irrigation systems, and protecting watersheds, can help mitigate the impacts of climate change. Cooperation at local, national, and global levels is necessary to manage shared water resources and ensure that everyone has access to clean water and sanitation.`,
      imageUrl: "/images/clean-water.jpg",
    },
    {
      id: 7,
      title: "Affordable and Clean Energy",
      content: `Energy is essential for modern life, yet millions of people worldwide lack access to affordable, reliable, and sustainable energy. SDG 7 aims to ensure access to affordable, reliable, sustainable, and modern energy for all. Energy poverty continues to affect many developing countries, where households and businesses have limited access to electricity, hindering economic development. In addition, the continued reliance on fossil fuels contributes to climate change, air pollution, and environmental degradation.
  
                Transitioning to clean and renewable energy sources, such as solar, wind, and hydropower, is critical to achieving this goal. Renewable energy technologies have the potential to provide electricity to remote and underserved regions, reduce greenhouse gas emissions, and promote sustainable development. Expanding access to clean cooking solutions is also a priority. Many households, particularly in low-income countries, still rely on traditional biomass, such as wood or charcoal, for cooking, leading to indoor air pollution and serious health issues.
  
                Achieving SDG 7 requires significant investments in energy infrastructure and the promotion of energy efficiency. Governments, businesses, and international organizations must work together to create policies that support renewable energy deployment and reduce the reliance on fossil fuels. Access to clean energy not only improves quality of life but also supports economic growth, job creation, and environmental sustainability. Ensuring that energy is affordable, sustainable, and accessible to all is crucial for achieving many other SDGs.`,
      imageUrl: "/images/affordable-clean-energy.jpg",
    },
    {
        id: 8,
        title: "Decent Work and Economic Growth",
        content: `SDG 8 promotes sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all. Economic growth is essential for reducing poverty and ensuring prosperity, but it must be inclusive and sustainable. Millions of people around the world face unemployment, underemployment, or poor working conditions. Youth unemployment, in particular, remains a critical issue globally. This goal emphasizes the need for policies that promote job creation, entrepreneurship, and the protection of labor rights.
    
                  Decent work means not only having a job but also working under safe conditions, receiving fair wages, and having opportunities for growth. SDG 8 calls for the elimination of child labor, forced labor, and modern slavery, all of which exploit vulnerable individuals and hinder development. Creating quality jobs, particularly in emerging industries like renewable energy and technology, is crucial for ensuring that people can improve their living standards while contributing to economic growth.
    
                  Sustainable economic growth must go hand-in-hand with environmental protection. SDG 8 encourages countries to decouple economic growth from environmental degradation by promoting resource efficiency and sustainable production patterns. This includes transitioning toward a green economy, where businesses operate in ways that reduce their environmental impact. Governments and businesses must collaborate to create opportunities for decent work and foster an economy that benefits everyone while respecting the planet’s limits.`,
        imageUrl: "/images/decent-work.jpg",
      },
      {
        id: 9,
        title: "Industry, Innovation, and Infrastructure",
        content: `SDG 9 focuses on building resilient infrastructure, promoting inclusive and sustainable industrialization, and fostering innovation. Infrastructure, such as transport systems, energy grids, and digital networks, is the backbone of economic development. However, many developing countries face significant infrastructure gaps, which limit their ability to grow economically and provide basic services to their populations. SDG 9 emphasizes the importance of investing in sustainable and resilient infrastructure that can withstand environmental and economic challenges.
    
                  Sustainable industrialization is essential for job creation and economic growth. However, industries must adopt practices that reduce environmental harm and promote resource efficiency. The transition to greener industries is crucial for addressing climate change and environmental degradation. Additionally, SDG 9 calls for supporting small and medium-sized enterprises (SMEs), which are key drivers of innovation and employment. Ensuring that these businesses have access to financial services and markets is vital for fostering inclusive growth.
    
                  Innovation is at the heart of sustainable development. Technological advancements can drive progress in areas such as healthcare, agriculture, and energy. However, the benefits of innovation must be shared globally to ensure that no country is left behind. International cooperation in research, development, and the transfer of technologies is essential for achieving this goal. By fostering innovation, building resilient infrastructure, and promoting sustainable industrial growth, we can create a more prosperous and equitable world.`,
        imageUrl: "/images/industry-innovation.jpg",
      },
      {
        id: 10,
        title: "Reduced Inequalities",
        content: `Inequality is a pervasive issue that affects societies in various forms, from income disparities to unequal access to opportunities and services. SDG 10 aims to reduce inequality within and among countries by addressing the root causes of discrimination and exclusion. This goal recognizes that inequality hinders social and economic development and undermines efforts to reduce poverty. To create a more equitable world, governments must promote policies that ensure equal access to resources, education, healthcare, and employment.
    
                  Economic inequality has widened in many countries, with the richest individuals controlling a disproportionate share of wealth. This disparity exacerbates social tensions and reduces social mobility, making it harder for people in lower-income groups to improve their lives. Achieving SDG 10 requires progressive taxation systems, social protection measures, and labor policies that protect the rights of workers, particularly those in vulnerable situations. Strengthening the voices of marginalized groups in decision-making processes is also crucial for reducing inequality.
    
                  Inequality is not only an economic issue but also one of social justice. Discrimination based on race, gender, ethnicity, disability, or other factors often prevents individuals from fully participating in society. SDG 10 calls for eliminating discriminatory practices and promoting inclusive institutions that respect the rights of all people. Reducing inequality between countries is equally important. This includes promoting fair trade, debt relief, and the transfer of technology to developing nations. Global cooperation is key to ensuring that no one is left behind in the pursuit of sustainable development.`,
        imageUrl: "/images/reduced-inequality.jpg",
      },
      {
        id: 11,
        title: "Sustainable Cities and Communities",
        content: `More than half of the world's population lives in cities, and this number is expected to grow significantly in the coming decades. SDG 11 aims to make cities and human settlements inclusive, safe, resilient, and sustainable. Urbanization can drive economic growth and innovation, but it also poses challenges related to infrastructure, housing, transportation, and environmental sustainability. Many cities struggle with inadequate housing, poor air quality, and limited access to essential services, particularly for marginalized communities.
    
                  One of the key components of this goal is ensuring access to adequate and affordable housing. Rapid urbanization has led to the rise of informal settlements, where millions of people live in overcrowded and unsanitary conditions. SDG 11 calls for investments in affordable housing and the development of sustainable urban planning that addresses the needs of all citizens, including vulnerable groups. This includes improving public transportation systems, reducing traffic congestion, and promoting walkable and bike-friendly cities.
    
                  Building resilient cities is also crucial to addressing the risks posed by climate change and natural disasters. Many cities are located in vulnerable areas, and without proper planning, they are at risk of severe damage from floods, storms, and other environmental hazards. SDG 11 promotes the adoption of policies and practices that enhance urban resilience, such as green infrastructure, sustainable waste management, and energy-efficient buildings. By focusing on inclusivity and sustainability, cities can become engines of sustainable development.`,
        imageUrl: "/images/sustainable-cities.jpg",
      },
      {
        id: 12,
        title: "Responsible Consumption and Production",
        content: `SDG 12 focuses on ensuring sustainable consumption and production patterns. The way we produce and consume goods has a profound impact on the environment, with unsustainable practices leading to resource depletion, pollution, and climate change. Achieving responsible consumption and production requires rethinking how goods are produced, used, and disposed of, with a focus on reducing waste and minimizing environmental harm. Businesses, governments, and consumers all play a role in fostering sustainable consumption and production.
    
                  One of the major targets of this goal is reducing food waste. Every year, approximately one-third of all food produced is lost or wasted, even as millions of people go hungry. Reducing food waste at both the production and consumption levels can help alleviate hunger and reduce the environmental impact of food systems. This involves improving supply chain efficiency, enhancing storage and transportation, and encouraging consumers to adopt more sustainable food habits.
    
                  Sustainable production also involves minimizing the use of harmful chemicals and reducing waste generation. The circular economy model, which emphasizes recycling, reusing, and repairing products, offers a viable alternative to the traditional linear economy of "take, make, dispose." Governments can promote sustainable production through policies that encourage eco-friendly practices, while businesses can adopt green technologies and innovation to reduce their environmental footprint. Consumers can contribute by making informed choices and reducing their consumption of single-use plastics and other environmentally damaging products.`,
        imageUrl: "/images/responsible-consumption.jpg",
      },
      {
        id: 13,
        title: "Climate Action",
        content: `Climate change is one of the most pressing challenges of our time, threatening ecosystems, economies, and communities around the world. SDG 13 calls for urgent action to combat climate change and its impacts by reducing greenhouse gas emissions, promoting climate resilience, and integrating climate policies into national strategies. The increasing frequency of extreme weather events, rising sea levels, and changing weather patterns are clear signs that the planet is under severe stress from climate change.
    
                  One of the key strategies for addressing climate change is reducing reliance on fossil fuels and transitioning to clean, renewable energy sources like solar, wind, and hydropower. Countries must also adopt energy-efficient technologies and promote sustainable practices in industries such as agriculture, transportation, and construction. In addition, climate change mitigation efforts need to be complemented by adaptation strategies, such as building resilient infrastructure and protecting vulnerable ecosystems and communities from climate-related disasters.
    
                  International cooperation is essential to achieving this goal. Climate change is a global problem that requires a coordinated global response. The Paris Agreement, signed in 2015, was a critical step toward uniting countries in the fight against climate change. However, much more needs to be done to meet the targets set by the agreement. Developed countries must support developing nations through technology transfer, financial assistance, and capacity-building efforts to help them transition to low-carbon economies and adapt to the impacts of climate change.`,
        imageUrl: "/images/climate-action.jpg",
      },
      {
        id: 14,
        title: "Life Below Water",
        content: `Oceans, seas, and marine resources are essential to human well-being and the health of the planet. SDG 14 aims to conserve and sustainably use the oceans, seas, and marine resources for sustainable development. Oceans cover more than 70% of the Earth’s surface and provide food, oxygen, and livelihoods to millions of people. However, they are under immense pressure from pollution, overfishing, and climate change. Ensuring the long-term health of the oceans is crucial for maintaining biodiversity and the livelihoods of those who depend on marine ecosystems.
    
                  One of the main targets of SDG 14 is to reduce marine pollution, particularly from land-based activities. Plastic pollution has become one of the most visible threats to the oceans, with millions of tons of plastic entering the sea every year. This waste harms marine life, damages ecosystems, and even enters the food chain, posing risks to human health. Addressing this issue requires global cooperation to reduce plastic use, improve waste management, and prevent pollution from entering waterways.
    
                  Sustainable fishing is also a priority for SDG 14. Overfishing has led to the depletion of fish stocks, threatening the food security and livelihoods of millions of people. To protect marine biodiversity, countries must regulate fishing practices, establish marine protected areas, and enforce laws to prevent illegal fishing. Ensuring that marine resources are used sustainably is vital for the health of the oceans and the communities that rely on them. In addition, addressing the impacts of climate change on the oceans, such as ocean acidification and rising sea temperatures, is crucial for safeguarding marine ecosystems.`,
        imageUrl: "/images/life-below-water.jpg",
      },
      {
        id: 15,
        title: "Life on Land",
        content: `SDG 15 focuses on protecting, restoring, and promoting the sustainable use of terrestrial ecosystems. Forests, wetlands, and grasslands are critical for biodiversity, climate regulation, and human livelihoods, yet they are under constant threat from deforestation, habitat loss, and degradation. Deforestation, in particular, is a major concern, as forests are home to 80% of the world’s terrestrial species and play a vital role in absorbing carbon dioxide. SDG 15 aims to halt deforestation and promote reforestation and sustainable forest management.
    
                  Biodiversity loss is another pressing issue addressed by this goal. Species extinction rates have accelerated due to human activities such as agriculture, mining, and urban development. Protecting endangered species and their habitats is essential for maintaining ecological balance and ensuring the sustainability of ecosystems. SDG 15 calls for the establishment and effective management of protected areas to conserve biodiversity and promote the sustainable use of ecosystems.
    
                  Land degradation, often caused by unsustainable farming practices, desertification, and climate change, poses a serious threat to food security and human well-being. Restoring degraded land through sustainable agricultural practices and ecosystem restoration is crucial for reversing this trend. Additionally, combating desertification and promoting sustainable land use can help mitigate the impacts of climate change. By promoting the sustainable use of land resources, SDG 15 aims to create a future where ecosystems can thrive alongside human development.`,
        imageUrl: "/images/life-on-land.jpg",
      },
      {
        id: 16,
        title: "Peace, Justice, and Strong Institutions",
        content: `SDG 16 aims to promote peaceful and inclusive societies, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels. Conflict, violence, and weak institutions undermine development and deprive people of their rights. This goal emphasizes the importance of protecting human rights, reducing violence, and ensuring access to justice. Building strong institutions is essential for upholding the rule of law and preventing corruption and abuse of power.
    
                  Peace and justice are fundamental to sustainable development. Conflicts and instability often displace people, destroy infrastructure, and divert resources away from essential services like healthcare and education. SDG 16 calls for reducing violence and finding peaceful solutions to conflicts through diplomacy and international cooperation. It also promotes the protection of children from exploitation, trafficking, and all forms of violence.
    
                  Strong institutions are crucial for fostering transparency, accountability, and trust in governance. Corruption and lack of accountability weaken institutions and perpetuate inequality. SDG 16 advocates for building inclusive institutions that represent the interests of all citizens, ensuring that marginalized groups have a voice in decision-making processes. Strengthening the rule of law, protecting human rights, and ensuring equal access to justice are vital for creating peaceful and just societies.`,
        imageUrl: "/images/peace-justice.jpg",
      },
      {
        id: 17,
        title: "Partnerships for the Goals",
        content: `SDG 17 emphasizes the importance of global partnerships in achieving the Sustainable Development Goals. The challenges posed by poverty, inequality, and climate change are complex and require coordinated efforts from governments, businesses, civil society, and international organizations. Partnerships for the Goals aim to enhance the means of implementation, including financial resources, technology transfer, and capacity-building efforts, to support sustainable development in all countries.
    
                  A key component of SDG 17 is the mobilization of financial resources. Developing countries, in particular, require substantial investments to address issues like poverty, health, and education. This goal calls for strengthening global cooperation to ensure that these countries receive the support they need, through foreign direct investment, development aid, and the promotion of fair trade. By working together, nations can overcome economic challenges and ensure that the benefits of development are shared globally.
    
                  Technology and innovation are critical for achieving the SDGs, and SDG 17 highlights the need for knowledge-sharing and capacity-building. Developed countries are encouraged to support developing nations by providing access to new technologies, research, and expertise. Partnerships between governments, the private sector, and civil society are essential for driving progress and ensuring that no country is left behind in the global pursuit of sustainable development. By fostering global partnerships, SDG 17 seeks to create a world where the resources, knowledge, and opportunities for sustainable development are accessible to all.`,
        imageUrl: "/images/partnerships.jpg",
      },
    ];
  
  

    export default function GoalPage({ params }: { params: { id: string } }) {
        const [goal, setGoal] = useState<{ id: number; title: string; content: string; imageUrl: string } | undefined>();
      
        useEffect(() => {
          const card = cards.find((c) => c.id === Number(params.id));
          setGoal(card);
        }, [params.id]);
      
        if (!goal) {
          return <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
          </div>;
        }
      
        return (
          <div className="container mx-auto p-8 flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/2 w-full">
              <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
                <h1 className="text-4xl font-bold mb-6 text-primary">{goal.title}</h1>
                <p className="text-lg leading-relaxed">{goal.content}</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                <img 
                  src={goal.imageUrl} 
                  alt={goal.title} 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105" 
                  style={{ aspectRatio: '1/1', maxWidth: '3072px', maxHeight: '3072px' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        );
      }