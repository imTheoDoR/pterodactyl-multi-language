import React, { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios';
import i18n from '@/i18n';
import InputSpinner from '@/components/elements/InputSpinner';
import SelectLanguage from '@/components/elements/SelectLanguage';

const LanguageSelector = () => {
    const user = useStoreState((store) => store.user.data);
    const updateUserData = useStoreActions((actions) => actions.user.updateUserData);

    const [languages, setLanguages] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('/locales/list')
            .then((res) => setLanguages(res.data))
            .finally(() => setLoading(false));
    });

    const handleLangChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLang = e.target.value;

        i18n.changeLanguage(selectedLang);

        try {
            await axios.post('/api/client/account/language/save', { language: selectedLang });

            updateUserData({ language: selectedLang });
            localStorage.setItem('lang', selectedLang);
        } catch (error) {
            console.log('Failed to update lang:', error);
        }
    };

    return (
        <InputSpinner visible={loading}>
            <SelectLanguage disabled={loading} onChange={handleLangChange} value={user?.language}>
                {Object.entries(languages).map(([key, label]) => (
                    <option key={key} value={key}>
                        {label}
                    </option>
                ))}
            </SelectLanguage>
        </InputSpinner>
    );
};

export default LanguageSelector;
