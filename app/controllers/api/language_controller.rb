class Api::LanguageController < ApplicationController
    

    def create
    end

    def language_params
        params.require(:languages).permit(:streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, presence: true)
    end
end