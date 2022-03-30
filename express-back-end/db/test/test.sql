insert into clients (first_name, last_name, email, city, province, language_1, language_2) values ('Jessalin', 'Dawson', 'jdawson3@ebay.com', 'Vancouver', 'BC', 'Japanese', null);

insert into professionals (first_name, last_name, email, city, province, language_1, language_2, profession, icon_url, description, cost_per_session) values ('Garek', 'Slamaker', 'gslamaker0@gnu.org', 'Vancouver', 'BC', 'Japanese', null, 'Psychologist', 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'I offer individual, couples, and family counseling based on a holistic, integrative, and meaning-centered approach.', null);
insert into professionals (first_name, last_name, email, city, province, language_1, language_2, profession, icon_url, description, cost_per_session) values ('Nealy', 'Ivashinnikov', 'nivashinnikov1@parallels.com', 'Richmond', 'BC', 'Mandarin', null, 'Counsellor', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'Within the therapeutic relationship, I draw from multiple modalities and theories that support a relational and person-centered environment backed by neurosciences and somatic awareness.', 88);
insert into professionals (first_name, last_name, email, city, province, language_1, language_2, profession, icon_url, description, cost_per_session) values ('Ole', 'Beagley', 'obeagley2@ovh.net', 'Victoria', 'BC', 'Punjabi', null, 'Counsellor', 'https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'I welcome, respect, and believe in ALL people, regardless of marginalization or elevation.', 117);
insert into professionals (first_name, last_name, email, city, province, language_1, language_2, profession, icon_url, description, cost_per_session) values ('Xever', 'Patel', 'xpatel3@ow.ly', 'Vancouver', 'BC', 'Italian', 'Japanese', 'Clinical Social Worker', 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'I have devoted my practice to working holistically with people who wish to free themselves from the grips of trauma and return to states of safety, flow and empowerment.', 68);
insert into professionals (first_name, last_name, email, city, province, language_1, language_2, profession, icon_url, description, cost_per_session) values ('Tobias', 'Brainsby', 'tbrainsby4@census.gov', 'Kelowna', 'BC', 'Swahili', 'Japanese', 'Psychiatrist', 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'I am a Registered Psychologist who specializes in therapy for children, adolescents, and adults in Vancouver, BC. I provide evidence-based treatment for clients with a range of difficulties.', 104);

INSERT INTO specialties (name) VALUES
('ADHD'),
('Stress');

insert into appointments (client_id, professional_id, date, time, description) values (1, 1, '2022-04-01', '09:00:00', 'consultation');
insert into appointments (client_id, professional_id, date, time, description) values (1, 2, '2022-04-30', '12:00:00', 'follow-up appointment');

insert into professionals_specialties (professional_id, specialty_id) values (1, 1);
insert into professionals_specialties (professional_id, specialty_id) values (2, 2);
insert into professionals_specialties (professional_id, specialty_id) values (3, 1);
insert into professionals_specialties (professional_id, specialty_id) values (4, 1);
insert into professionals_specialties (professional_id, specialty_id) values (5, 2);
insert into professionals_specialties (professional_id, specialty_id) values (1, 2);
insert into professionals_specialties (professional_id, specialty_id) values (2, 1);

