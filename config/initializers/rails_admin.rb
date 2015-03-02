RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.model 'Member' do
    navigation_label 'Наша команда'
    weight 1

    edit do
      field :name
      field :desc
      field :photo
      field :sort
      field :published
    end

    list do
      field :name
      field :desc
      field :photo
      field :sort
      field :published
    end
  end

  config.model 'Meeting' do
    navigation_label 'Расписание занятий'
    weight 2

    edit do
      field :date_from
      field :time_from
      field :time_to
      field :desc
      field :published
    end

    list do
      field :date_from
      field :time_from
      field :time_to
      field :desc
      field :published
    end
  end

  config.model 'Magazine' do
    navigation_label 'О нас пишут'
    weight 3

    edit do
      field :title
      field :code
      field :comment
      field :sort
      field :published
    end

    list do
      field :title
      field :code
      field :comment
      field :sort
      field :published
    end
  end

  config.model 'Question' do
    navigation_label 'Вопросы и ответы'
    weight 3

    edit do
      field :title
      field :answer
      field :sort
      field :published
    end

    list do
      field :title
      field :answer
      field :sort
      field :published
    end
  end
end
