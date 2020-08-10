import express from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        price,
        schedule
    } = request.body;

    const trx = await db.transaction();

    try {
        const insertedUsersIds = await trx('users').returning('id').insert({
            name,
            avatar,
            whatsapp,
            bio
        });
    
        const user_id = insertedUsersIds[0];
    
    
        const insertedClassesIds = await trx('classes').returning('id').insert({
            subject,
            price,
            user_id
        });
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to)
            };
        });
    
        await trx('class_schedule').insert(classSchedule);
    
        await trx.commit();
    
        return response.status(201).send({ message: 'Created successfully!'});
    } catch (error) {
        await trx.rollback();

        return response.status(400).json({ message: 'Unexpected error whilte creating a new class.'});
    }
    
})

export default routes;